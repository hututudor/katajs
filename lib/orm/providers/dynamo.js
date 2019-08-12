const aws = require('aws-sdk');

class Dynamo {
  constructor(envName, primaryKey) {
    this.envName = envName;
    this.primaryKey = primaryKey;

    this.client = new aws.DynamoDB.DocumentClient();
  }

  async all() {
    return this.client
      .scan({
        TableName: this.envName
      })
      .promise();
  }

  async create(item) {
    await this.client
      .put({
        TableName: this.envName,
        Item: item
      })
      .promise();

    return item;
  }

  async update(id, item) {
     let query = 'set ';
     Object.keys(item).map(key => {
       query += '#' + key + ' = ' + ':' + key;
     });

     let names = {};
     Object.keys(item).map(key => {
       names[('#' + key)] = key
     });

     let values = {};
     Object.keys(item).map(key => {
       values[(':' + key)] = item[key];
     });

    return this.client.update({
      TableName: process.env.TABLE_NAME,
      Key: {
        [this.primaryKey]: id
      },
      UpdateExpression: query,
      ExpressionAttributeNames: names,
      ReturnValues: 'UPDATED_NEW',
      ExpressionAttributeValues: values
    }).promise();
  }

  async delete(id) {
    return this.client
      .delete({
        TableName: this.envName,
        Key: {
          [this.primaryKey]: id
        },
        ReturnValues: 'ALL_OLD'
      })
      .promise();
  }
}

module.exports = Dynamo;

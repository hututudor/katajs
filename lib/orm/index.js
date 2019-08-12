const Dynamo = require('./providers/dynamo');

class Database {
  constructor() {
    this.providers = {
      DYNAMODB: 'DYNAMODB'
    };
    this.tables = [];
    this.provider = this.providers.DYNAMODB;
  }

  addTable(envName, name, primaryKey) {
    this.tables.push({
      envName,
      name,
      primaryKey
    });
  };

  table(name) {
    const table = this.tables.find(table => table.name === name);

    switch (this.provider) {
      case this.providers.DYNAMODB:
        return new Dynamo(table.envName, table.primaryKey);
      default:
        return null;
    }
  }
}

module.exports = Database;
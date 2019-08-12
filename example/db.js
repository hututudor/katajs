const ORM = require('../lib/orm');

const db = new ORM();
db.provider = db.providers.DYNAMODB;

db.addTable(process.env.TABLE_NAME, 'todos', 'id');

module.exports = db;
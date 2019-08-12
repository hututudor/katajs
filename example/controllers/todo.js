const uuid = require('uuid/v4');
const { success, error } = require('../../lib/res');

const getAll = async ({ event, body, db }) => {
  const res = await db.table('todos').all();

  return success(res.Items);
};

const add = async ({ e, body, db }) => {
  const res = await db.table('todos').create({
    id: uuid(),
    name: body.name,
    status: 'progress',
    created_at: new Date().toISOString()
  });

  return success(res);
};

const update = async ({ e, body, db }) => {
  const res = await db.table('todos').update(body.id, {
    status: 'done'
  });

  return success(res);
};

const remove = async ({ e, body, db }) => {
  const res = await db.table('todos').delete(body.id);

  return success(res);
};

module.exports = {
  getAll,
  add,
  update,
  remove
};

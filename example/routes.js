const Router = require('../lib/router');
const todoController = require('./controllers/todo');

const router = new Router();

router.get('/', todoController.getAll);
router.put('/', todoController.add);
router.post('/', todoController.update);
router.delete('/', todoController.remove);

module.exports = router;
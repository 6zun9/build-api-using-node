import express from 'express';
import todoController from '../controller/todoContorller';

const router = express.Router();

router.get('/', todoController.getAllTodos);
router.get('/:id', todoController.getTodo);
router.post('/', todoController.createTodo);
router.put('/:id', todoController.updateTodo);
router.delete('/:id', todoController.deleteTodo);

export default router;

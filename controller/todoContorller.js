import todos from '../db/db';

class TodosController {
  getAllTodos(req, res) {
    return res.status(200).send({
      success: 'true',
      message: 'todos retrieved successfully',
      todos,
    });
  }

  createTodo(req, res) {
    const { title, description } = req.body;
    if (!title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    }

    if (!description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }
    const todo = {
      id: todos.length + 1,
      title,
      description,
    };

    todos.push(todo);

    return res.status(201).send({
      success: 'true',
      message: 'todo added successfully',
      todo,
    });
  }

  getTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    todos.map((todo) => {
      if (todo.id === id) {
        return res.status(200).send({
          success: 'true',
          message: 'todo retrieved successfully',
          todo,
        });
      }

      return res.status(404).send({
        success: 'false',
        message: 'todo does not exist',
      });
    });
  }

  deleteTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    todos.map((todo) => {
      if (todo.id === id) {
        todos.filter((todo) => todo.id !== id);

        return res.status(200).send({
          success: 'true',
          message: 'todo deleted successfully',
          todos,
        });
      }
    });

    return res.status(404).send({
      success: 'false',
      message: 'todo ID doesnot expist',
    });
  }

  updateTodo(req, res) {
    const id = parseInt(req.params.id, 10);
    const { title, description } = req.body;
    const isFound = todos.some((todo) => todo.id === id);
    let updateTodo;
    if (!isFound) {
      return res.status(400).send({
        success: 'false',
        message: `todo of id ${id} not found`,
      });
    }

    if (!title) {
      return res.status(400).send({
        success: 'false',
        message: 'title is required',
      });
    }

    if (!description) {
      return res.status(400).send({
        success: 'false',
        message: 'description is required',
      });
    }

    if (isFound) {
      updateTodo = req.body;
    }

    todos.map((todo) => {
      if (todo.id === id) {
        (todo.id = updateTodo.id || id),
          (todo.title = title || updateTodo.title),
          (todo.description = description || updateTodo.title);

        return res.status(201).send({
          success: 'true',
          message: 'todo updated successfully',
          todo,
          todos,
        });
      }
    });
  }
}

const todoController = new TodosController();

export default todoController;

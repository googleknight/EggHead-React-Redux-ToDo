import { CREATE_TODO_LIST, ADD_TODO, REMOVE_TODO_LIST,
  UPDATE_TODO_STATUS } from '../actions/index';

const defaultStore = {
  allTodDoList: [],
};

const todos = (prevState = defaultStore, action) => {
  switch (action.type) {
    case CREATE_TODO_LIST: {
      const ToDoList = [action.list.Name, action.list.listId];
      return [...prevState.allTodDoList, ToDoList];
    }
    case REMOVE_TODO_LIST: {
      return prevState.allTodDoList.map((todoList) => {
        if (todoList.listId !== action.list.listId) {
          return todoList;
        }
      });
    }
    case ADD_TODO: {
      const toDo = {
        todoId: action.toDo.todoId,
        text: action.toDo.text,
        status: action.toDo.status,
      };
      return [...prevState.allTodDoList.slice(0, action.list.listId),
        [...prevState.allTodDoList[action.list.listId], toDo],
        ...prevState.allTodDoList.slice(action.list.listId + 1)];
    }
    case UPDATE_TODO_STATUS: {
      return [...prevState.allTodDoList.slice(0, action.list.listId),
        [...prevState.allTodDoList[action.list.listId].map((todo) => {
          if (todo.todoId !== action.toDo.todoId) {
            return todo;
          }
          return { ...todo, status: !todo.status };
        })],
        ...prevState.allTodDoList.slice(action.list.listId + 1)];
    }
    default: {
      return prevState;
    }
  }
};


export default todos;

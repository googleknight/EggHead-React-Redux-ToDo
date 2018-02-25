export const CREATE_TODO_LIST = 'CREATE_TODO_LIST';
export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO_LIST = 'REMOVE_TODO_LIST';
export const UPDATE_TODO_STATUS = 'UPDATE_TODO_STATUS';

export const createList = (listId, listName) => ({
  type: CREATE_TODO_LIST,
  list: { listId, listName },
});

export const removeList = listId => ({
  type: REMOVE_TODO_LIST,
  list: { listId },
});

export const addToDo = (listId, todoId, text, status) => ({
  type: ADD_TODO,
  list: { listId },
  todo: { todoId, text, status },
});

export const updateStatus = (listId, todoId) => ({
  type: UPDATE_TODO_STATUS,
  list: { listId },
  todo: { todoId },
});

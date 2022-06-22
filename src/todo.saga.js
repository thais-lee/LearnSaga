import {all, call, put} from 'redux-saga/effects';
import {takeLatest} from 'redux-saga/effects';

import {getTodo, addTodo, toogleTodo, deleteTodo} from './api';
import {todoActions} from './reducer';
function* getAllTodo() {
  const data = yield call(getTodo);
  yield put({type: todoActions.getTodoSuccess, payload: data.data});
}

function* addTodos(action) {
  const {payload} = action;
  const data = yield call(addTodo, payload);
  // yield put({type: todoActions.addTodoSuccess, payload: data.data});
  yield getAllTodo();
}

function* toogleTodos(action) {
  const {payload} = action;
  const data = yield call(toogleTodo, payload);
  // yield put({type: todoActions.toogleTodoSuccess, payload: data.data});
  yield getAllTodo();
}

function* deleteTodos(action) {
  const {payload} = action;
  const data = yield call(deleteTodo, payload);
  // yield put({type: todoActions.toogleTodoSuccess, payload: data.data});
  yield getAllTodo();
}

export default function* todoSaga() {
  yield all([
    takeLatest(todoActions.getTodo.type, getAllTodo),
    takeLatest(todoActions.addTodo.type, addTodos),
    takeLatest(todoActions.toogleTodo.type, toogleTodos),
    takeLatest(todoActions.deleteTodo.type, deleteTodos),
  ]);
}

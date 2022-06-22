import axios from 'axios';

export function getTodo() {
  return axios.request({
    method: 'GET',
    url: 'https://628d9458368687f3e7058d92.mockapi.io/api/v1/todo',
  });
}

export function addTodo(text) {
  return axios.request({
    method: 'POST',
    url: 'https://628d9458368687f3e7058d92.mockapi.io/api/v1/todo',
    data: {text: text, isDone: false},
  });
}

export function toogleTodo(data){
  const {id, text, isDone} = data;
  return axios.request({
    method: 'PUT',
    url: 'https://628d9458368687f3e7058d92.mockapi.io/api/v1/todo' + `/${id}`,
    data: {text: text, isDone: isDone},
  });
} 

export function deleteTodo(id){
  return axios.request({
    method: 'DELETE',
    url: 'https://628d9458368687f3e7058d92.mockapi.io/api/v1/todo' + `/${id}`,
    // data: {text: text, isDone: isDone},
  });
} 

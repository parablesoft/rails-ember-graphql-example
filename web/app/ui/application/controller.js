import Controller from "@ember/controller";
import {set} from "@ember/object";
import { isPresent } from '@ember/utils'
import { action } from "@ember-decorators/object"

export default class ApplicationController extends Controller{

  @action deleteTodo(listIndex,todoIndex){
    let todos = this.model[listIndex].todos
    todos.removeAt(todoIndex)
  }


  @action deleteList(listIndex){
    this.model.removeAt(listIndex)
  }

  @action updateTodoList(name, listIndex){
    let list = this.model[listIndex]
    set(list,"name",name)
  }

  @action updateTodo(content,listIndex,todoIndex){
    let todo = this.model[listIndex].todos[todoIndex]
    set(todo,"content",content)
  }

  @action addTodo(content,listIndex){

    this.model[listIndex].todos.addObject({
      content,
      completedAt: null
    })
  }

  @action addList(name){
    this.model.addObject({
      name,
      todos: []
    })
  }

  @action onComplete(todo){

    let newValue = isPresent(todo.completedAt) ? 
      null : new Date()
    set(todo,"completedAt",newValue)

    return todo.completedAt
  }





}


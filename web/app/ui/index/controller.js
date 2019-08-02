import Controller from '@ember/controller'
import { action } from '@ember/object'
import { inject as service } from '@ember/service'
import mutation from './AddTodo.graphql'
import query from './query.graphql'
import $ from 'jquery'

class ApplicationController extends Controller {

  @service apollo

  newTodo = ''

  @action
  handleNewTodoInput(e) {
    this.set('newTodo', e.target.value)
  }

  @action
  async addNewTodo(e) {
    e.preventDefault()

    const result = await this.apollo.mutate({
      mutation,
      variables: {
        name: this.newTodo
      },
      update: (store, { data: { addTodo: { todo } } }) => {
         // Read the data from our cache for this query.
        const data = store.readQuery({ query });
        // Add our comment from the mutation to the end.
        data.todos.push(todo);
        // Write our data back to the cache.
        store.writeQuery({ query, data });
      }
    })

    $('.todo-input').val('')
  }

  @action
  toggleTodo(todo) {
    let idx = this.model.indexOf(todo)
    this.model.removeObject(todo)
    this.model.insertAt(idx, {
      ...todo,
      isActive: !todo.isActive
    })
  }

  @action
  removeTodo(todo) {
    this.model.removeObject(todo)
  }
}

export default ApplicationController

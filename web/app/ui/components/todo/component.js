import Component from '@glimmer/component'
import mutation from './ToggleActive.graphql'
import RemoveTodo from './RemoveTodo.graphql'
import { inject as service } from '@ember/service'
import query from './../../index/query.graphql'
import _ from 'lodash'

class TodoComponent extends Component {
  @service apollo

  async toggle() {
    const active = !this.args.todo.active
    await this.apollo.mutate({
      mutation,
      variables: {
        id: this.args.todo.id,
        active
      }
    })
  }

  async remove() {
    await this.apollo.mutate({
      mutation: RemoveTodo,
      variables: {
        id: this.args.todo.id
      },
      update: (store, { data: { removeTodo: { id } } }) => {
        const data = store.readQuery({ query });
        _.remove(data.todos, todo => todo.id === id);
        console.log(data.todos)
        store.writeQuery({ query, data });
      }
    })
  }

}

export default TodoComponent

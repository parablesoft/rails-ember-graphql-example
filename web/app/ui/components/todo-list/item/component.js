import Component from "@glimmer/component"
import { isPresent } from '@ember/utils'
import { set } from '@ember/object'
import {tracked} from "@glimmer/tracking"

export default class TodoListItem extends Component{

  @tracked isEditing = false
  @tracked newContent = this.args.todo.content


  updateTodo(){
    let {
      todoIndex,
      listIndex
    } = this.args

    this.args.onUpdateTodo(
      this.newContent,
      listIndex,
      todoIndex
    )

    // this.todo.content = this.newContent
    this.isEditing = false

  }

  edit(){
    if(this.todo.completedAt != null)
      return

    this.isEditing = true
  }

  handleClick(e){
    let result  = this.args.onComplete(this.todo)
    set(this.todo,"completedAt",result)
  }

  get todo(){
    return this.args.todo
  }

}


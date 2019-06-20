import Component from "@glimmer/component"
import {tracked} from "@glimmer/tracking"

export default class TodoList extends Component{
  @tracked isEditing = false
  @tracked newListName = this.args.list.name

  updateList(){
    this.args.onUpdateTodoList(this.newListName,this.args.listIndex)
    this.isEditing = false
  }

  cancelEdit(e){
    e.preventDefault()
    this.isEditing = false
    this.newListName = this.args.list.name
  }

  edit(){
    this.isEditing = true

  }

  deleteList(e){
    e.preventDefault()
    let confirmed = confirm("Are you sure?")
    if(!confirmed)
      return
    this.args.onDeleteList(this.args.listIndex)
  }


}


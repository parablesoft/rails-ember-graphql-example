import Component from "@glimmer/component"
import {tracked} from "@glimmer/tracking"

export default class TodoList extends Component{
  @tracked isEditing = false
  @tracked newListName = this.args.list.name

  updateList(){
    this.args.onUpdateTodoList(this.newListName,this.args.listIndex)
    this.isEditing = false
  }

  edit(){
    this.isEditing = true
  }


}


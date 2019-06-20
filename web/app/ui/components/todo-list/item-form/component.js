import Component from "@glimmer/component"
import {tracked} from "@glimmer/tracking"
import { isEmpty } from '@ember/utils'

export default class  extends Component{

  @tracked content = this.args.content


  addTodo(){
    if(isEmpty(this.content))
      return

    this.args.onAddTodo(this.content,this.args.listIndex)
    this.content = ""
  }
}


import Component from "@glimmer/component"
import {tracked} from "@glimmer/tracking"
import { isEmpty } from '@ember/utils'

export default class TodoLists extends Component{

  @tracked newListName=""

  addList(){


    if(isEmpty(this.newListName))
      return

    this.args.onAddList(this.newListName)

    this.newListName = ""
  }

}


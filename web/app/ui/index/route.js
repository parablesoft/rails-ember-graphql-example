import Route from '@ember/routing/route'
import { RouteQueryManager } from "ember-apollo-client"
import query from './query.graphql'

class ApplicationRoute extends Route.extend(RouteQueryManager) {

  model() {
    return this.apollo.watchQuery({ query }, "todos");
  }
}

export default ApplicationRoute

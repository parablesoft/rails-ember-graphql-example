Stardust::GraphQL.define_query :todos_get_lists do

  description "TODO: Write a detailed description"

  ## Required
  ## What is the return type of this query
  type [:todo_list]

  ## Can this query return nil
  null false



  ## This is the entrypoint for the query
  def resolve
    TodoList.all
  end

end

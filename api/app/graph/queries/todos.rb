Stardust::GraphQL.define_query :todos do

  description "Get all of the todos"
  type [:todo]
  null false

  def resolve
    Todo.all.order(:created_at)
  end


end

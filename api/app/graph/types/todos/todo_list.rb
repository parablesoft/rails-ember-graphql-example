Stardust::GraphQL.define_types do

  object :todo_list do
    description "Represents a to-do list"
    field :id, :id, null: false
    field :name,:string, null: false
  end

end

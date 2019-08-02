Stardust::GraphQL.define_mutation :remove_todo do

 description "Remove a todo task"
 null false

 argument :id, :id, required: true,
   loads: Todo, as: :todo

 field :id, :id, null: false

 def resolve(todo:)
   id = todo.id
   todo.destroy

   { id: id }
 end


end

Stardust::GraphQL.define_mutation :update_todo do

 description "Update a todo's active state"
 null false

 argument :id, :id, required: true,
   loads: Todo, as: :todo

 argument :active, :boolean, required: true

 field :todo, :todo, null: true

 def resolve(todo:, active:)
   todo.update(active: active)
   {
     todo: todo
   }
 end


end

Stardust::GraphQL.define_mutation :add_todo do

 description "Add a new todo task"
 null false

 argument :name, :string, required: true

 field :todo, :todo, null: false

 def resolve(name:)
   todo = Todo.create(name: name)

   {
     todo: todo
   }
 end


end

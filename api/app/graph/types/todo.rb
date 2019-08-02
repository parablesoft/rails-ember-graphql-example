Stardust::GraphQL.define_types do

  object :todo do
    description "A thing that needs to be done"
    field :id, :id, null: false
    field :name, :string, null: false
    field :deadline, :datetime, null: true
    field :priority, :integer, null: false
    field :active, :boolean, null: false
    field :created_at, :datetime, null: false
    field :updated_at, :datetime, null: false
  end

end

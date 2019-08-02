Stardust::GraphQL.define_query :total_number_of_items do

  description "Get a specific item"
  type :integer
  null true

  def resolve
    (1..100).to_a.sample
  end


end

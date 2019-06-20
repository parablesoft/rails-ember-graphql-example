class CreateTodos < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|
      t.string :content
      t.boolean :completed, default: false
      t.belongs_to :todo_list, foreign_key: true
      t.datetime :completed_at

      t.timestamps
    end
  end
end

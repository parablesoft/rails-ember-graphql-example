class AddTodo < ActiveRecord::Migration[5.2]
  def change
    create_table :todos do |t|

      t.string :name, null: false
      t.boolean :active, null: false, default: true
      t.integer :priority, null: false, default: 1
      t.datetime :deadline, null: true
      t.timestamps
    end
  end
end

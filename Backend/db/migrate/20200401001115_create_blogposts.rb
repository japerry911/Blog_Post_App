class CreateBlogposts < ActiveRecord::Migration[6.0]
  def change
    create_table :blogposts, id: false do |t|
      t.string :id, null: false 
      t.string :title
      t.text :content

      t.timestamps
    end
  end
end

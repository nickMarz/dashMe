class LinkUserToIdentity < ActiveRecord::Migration
  def change
    remove_column :identities, :user_id
    add_reference :identities, :user, index: true
  end
end
class CreateIdentities < ActiveRecord::Migration
  def change
    create_table :identities do |t|
      t.string :provider
      t.string :uid
      t.string :nick_name
      t.string :oauth_token
      t.string :oauth_secret

      t.timestamps null: false
    end
  end
end

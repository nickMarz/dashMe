require 'rails_helper'

feature 'Visitor creates a new account' do
  before do
    # setup
    visit root_path
  end

  scenario 'sign in correctly' do
    fill_in 'user_email', with: 'user@example.com'
    fill_in 'password', with: 'password'
    click_button "sign up!" 
    expect(page).to have_content("Signed up!")
  end

  scenario 'no password' do
    fill_in "user_email", with: "test@example.com"
    fill_in "password", with:" "
    click_button "sign up!" 
    expect(page).to have_content("Form is invalid")
  end

  scenario 'no email' do
    fill_in "user_email", with: " "
    fill_in "password", with: "password"
    click_button "sign up!" 
    expect(page).to have_content("Form is invalid")
  end
  
  scenario 'invalid email' do
    fill_in "user_email", with: "user"
    fill_in "password", with: "password"
    click_button "sign up!" 
    expect(page).to have_content("Form is invalid")
  end

end

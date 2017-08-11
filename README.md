https://www.airpair.com/reactjs/posts/reactjs-a-guide-for-rails-developers
steps:

1. rails new accounts
2. add to Gemfile
	gem 'bootstrap-sass', '~> 3.3.6'
3. make sure ‘sass-rails’ exists
4. bundle install
5. Change app/assets/stylesheets/application.css -> application.scss
6. Remove everything in application.scss
7. Past in application.scss
	// "bootstrap-sprockets" must be imported before "bootstrap" and "bootstrap/variables"
	@import "bootstrap-sprockets";
	@import "bootstrap";
8. Add to Gemfile
	gem ‘react-rails’
9. bundle install
10. rails g react:install
11. brew mysql install //mysql -uroot
12. Modify database.yml
13. Add to Gemfile
	gem ‘mysql2’
14. bundle install




Knowledge:
1. With setState the current and previous states are merged. With replaceState, it throws out the current state, and replaces it with only what you provide. Usually setState is used unless you really need to remove keys for some reason; but setting them to false/null is usually a more explicit tactic. replaceState is lighter than setState

2. Using defaultValue instead of value to set the initial input values, this is because using just value without onChange will end up creating read-only inputs.

Why:
Q. Why do rails return “head :no_content” for JSON put request
A. The purpose is to return a HTTP status code 200 with an empty body


Hint:
1. 	Error: Can't verify CSRF token authenticity
	Problem: POST requests don't include the CSRF token required by Rails
	Solution: Rails' jquery_ujs unobtrusive driver will include the CSRF token on every AJAX request.
		Make sure //= require jquery_ujs is in application.js

2.	Error: React.addons undefined
	Problem: React-rails does not add React.addons by default
	Solution: Add following to config/application.rb
			config.react.addons = true

3.	Error: Only a ReactOwner can have refs
	Problem: You might be adding a ref to a component that was not created inside a component's render method, or you have multiple copies of React loaded.
	Solution: Remember to add .bind(this) to function
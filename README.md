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


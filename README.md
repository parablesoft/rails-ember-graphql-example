#README


## Bootstrapping the application

### Structure

1. Create a directory within your projects workspace
2. cd into that directory
3. git init


### Rails


1. Create the application
```bash
rails new api -d postgresql -T -J -G --api
```

2. Adjust your database.yml

3. Create your databases
```bash
bin/rails db:create:all
```


4. Install stardust_rails - All of the instructions are on the github page.

Add this line to your application's Gemfile:

```ruby
gem 'stardust_rails', require: 'stardust'
```

And then execute:
```bash
$ bundle
```

Mount the engine:
```ruby
# config/routes.rb
Rails.application.routes.draw do
  ...
  mount Stardust::Engine, at: "/"
  ...
end
```


### Ember

1. Create the application using the new ember octane template  
```bash
ember new web -b @ember/octane-app-blueprint --no-welcome --skip-npm --skip-bower --skip-git
```

2. Install tailwindcss
```bash
ember install ember-cli-tailwind
```

3. Setup Pods - Add the following key/value pair to the ENV object in web/config/environment.js
```    
podModulePrefix: "web/ui",
```


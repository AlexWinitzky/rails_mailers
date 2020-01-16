Rails.application.routes.draw do
  namespace :api do
    get '/contact', to: 'contact#contact'
  end
end

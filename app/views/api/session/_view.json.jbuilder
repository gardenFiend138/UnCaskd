json.extract! :current_user, :logged_in? do
  # something something something
end

# or is it...

json.partial! @current_user, current_user 

class Api::SessionsController < ApplicationController

  # redirect to the checkin feed when the user signs in
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/users/show'
    else
      render :json ['Looks like your username or password wasn\'t quite right...'],
      status: 401
    end
  end

  # redirect to the login page if the user signs out
  def destroy
    @user = current_user
    if @user
      logout
      render 'api/users/show'
    else
      render json: ['No one is currently logged in'], status: 404
    end
  end

end

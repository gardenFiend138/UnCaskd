class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )

    if @user
      login(@user)
      render 'api/checkins'
    else
      render :json ['Looks like your username or password wasn\'t quite right...'],
      status: 401
    end
  end

  def destroy
  end
end

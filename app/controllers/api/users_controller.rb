class UsersController < ApplicationController
  before_action: require_logged_in

  def new
    @user = User.new(user_params)
    render :new
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render 'api/home'
    else
      flash json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password)
  end

end

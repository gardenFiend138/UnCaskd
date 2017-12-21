class Api::UsersController < ApplicationController

  def new
    @user = User.new(user_params)
    render :new
  end

  def index
    @users = User.all
    render :index
  end

  def create
    @user = User.new(user_params)
    @user.image_url ||= "http://tinygraphs.com/squares/UnCaskd?theme=duskfalling&numcolors=4&size=220&fmt=svg"

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show_user_checkins
    @checkins = Checkin.find_by(user_id: params[:id])
    render :fetch_user_checkins
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :image_url)
  end

end

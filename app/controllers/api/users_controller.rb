class Api::UsersController < ApplicationController

  def new
    @user = User.new(user_params)
    render :new
  end

  def index
    @users = User.all.includes(:checkins, :cheers)
    render :index
  end

  def show
    @user = User.find(params[:id])
    @user_checkins = User.user_checkins(params[:id]) || []
    render :show
  end

  def create
    @user = User.new(user_params)
    @user.image_url ||= "http://tinygraphs.com/squares/#{user_params[:username]}?theme=duskfalling&numcolors=4&size=220&fmt=svg"

    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :image_url)
  end

end

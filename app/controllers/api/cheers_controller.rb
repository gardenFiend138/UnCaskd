class Api::CheersController < ApplicationController
  helper_method :current_user

  def new
    @cheer = Cheer.new
    render :new
  end

  def create
    @cheer = Cheer.new(cheers_params)

    @cheer.checkin_id = params[:cheer][:checkin_id]
    @cheer.user_id = params[:cheer][:user_id]

    if @cheer.save
      render :show
    else
      render json: @cheer.errors.full_messages, status: 422
    end
  end

  def index
    @cheers = Cheer.all.include(:checkin, :user)
    render :index
  end

  def show
    @cheers = Cheer.find(params[:id])
    render :show
  end

  def destroy
    @cheer = Cheer.find(params[:id])

    if @cheer.user_id == current_user.id
      @cheer.destroy
    else
      raise ['You can only delete your own cheers']
    end
    render :show
  end

  private

  def cheers_params
    params.require(:cheer).permit(:user_id, :checkin_id)
  end

end

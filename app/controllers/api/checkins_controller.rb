
class Api::CheckinsController < ApplicationController

  def new
    @checkin = Checkin.new(checkin_params)
    render :new
  end

  def create
    @checkin = Checkin.new(checkin_params)
    @checkin.user_id = current_user.id

    if @checkin.save
      # render json: @checkin
      render :show
      #alternatively make a checkin json jbuilder file and render that.

    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def show
    @checkin = Checkin.find(params[:id])
    render :show
  end

  def index
    @checkins = Checkin.order(updated_at: :desc).limit(20)
    render :index
  end

  # def checkins_by_user
  #   @checkins_by_user = Checkin.where(user_id: params[:user_id])
  #   # render json: @checkins_by_user
  #   render :checkins_by_user
  # end

  def edit
    @checkin = Checkin.find(params[:id])
    render :edit
  end

  def update
    @checkin = Checkin.find(params[:id])

    if @checkin.update_attributes(checkin_params)
      render :show
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def destroy
    checkin = Checkin.find(params[:id])
    checkin.destroy
    render "api/whiskey/#{@checkin.whiskey_id}"
  end

  private

  def checkin_params
    params.require(:checkin).permit(:body, :rating, :whiskey_id)
  end
end

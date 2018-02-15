
class Api::CheckinsController < ApplicationController

  def new
    @checkin = Checkin.new(checkin_params)
    render :new
  end

  def create
    @checkin = Checkin.new(checkin_params)
    @checkin.user_id = current_user.id

    if @checkin.save!
      render :show
    else

      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def show
    @checkin = Checkin.find(params[:id])
    render :show
  end

  def index
    @checkins = Checkin.all.includes(:cheers)
    @recent_checkins = Checkin.order(updated_at: :desc).includes(:cheers).limit(20)
    render :index
  end

  def checkins_by_user
    @checkins_by_user = Checkin.where(user_id: params[:user_id])
    # render json: @checkins_by_user
    render :json
  end

  def edit
    @checkin = Checkin.find(params[:id])
    render :show
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
    render :show
  end

  private

  def checkin_params
    params.require(:checkin).permit(:body, :rating, :whiskey_id, :id)
  end
end

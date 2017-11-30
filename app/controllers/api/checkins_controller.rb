
class Api::CheckinsController < ApplicationController

  def new
    @checkin = Checkin.new(checkin_params)
    render :new
  end

  # not sure about the whiskey ID getting to the checkin;
  # see what's available through debugger in window console
  # not sure about render path either...should it go to the feed?
  # or the whiskey show page?
  # look at params, figure out how to access whiskey_id
  def create
    @checkin = Checkin.new(checkin_params)
    @checkin.user_id = current_user.id
    # @checkin.whiskey_id = params[:whiskey_id]

    if @checkin.save
      # render json: @checkin
      render :index
      #alternatively make a checkin json jbuilder file and render that.
      # render "/whiskies/#{@checkin.whiskey_id}"
    else
      render json: @checkin.errors.full_messages, status: 422
    end
  end

  def show
    @checkin = Checkin.find(params[:id])
    render :show
  end

  def index
    @checkins = Checkin.all
    render :index
  end

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

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
      # render 'api/checkins'
      render :show
    end
  end

  def show
    @cheers = Cheer.all
    render :show
  end

  def destroy
    # p 'destroy params here'
    # p params[:id]
    # p'----------------'
    @cheer = Cheer.find(params[:id])
    # p @cheer
    # p @cheer.user_id
    # p @current_user.id
    @cheer.destroy
    # if @cheer.user_id == @current_user.id
    #   @cheer.destroy
    # else
    #   raise ['You can only delete your own cheers']
    # end
    render :show
  end

  private

  def cheers_params
    params.require(:cheer).permit(:user_id, :checkin_id)
  end

end

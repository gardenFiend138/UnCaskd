class Api::CheersController < ApplicationController
  def new
    @cheer = Cheer.new
  end

  def create
    @cheer = Cheer.new(cheers_params)
    p cheers_params
    @cheer.checkin_id = params[:checkin_id]
    @cheer.user_id = params[:user_id]
    @cheer.save!
    # render '/api/checkins'
    # if @cheer.save
      render :show
    # end
  end

  def show
    @cheers = Cheer.all
    render :show
  end

  def destroy
    @cheer = Cheer.find_by(params[:id])

    if @cheer.user_id == @current_user.id
      @cheer.destroy
    else
      raise ['You can only delete your own cheers']
    end
  end

  private

  def cheers_params
    params.require(:cheer).permit(:user_id, :checkin_id)
  end

end

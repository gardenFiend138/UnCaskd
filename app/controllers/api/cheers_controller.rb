class Api::CheersController < ApplicationController
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
    end
  end

  def show
    @cheers = Cheer.all
    render :show
  end

  def destroy
    @cheer = Cheer.find_by(params[:cheer][:id])

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

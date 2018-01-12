class Api::CheersController < ApplicationController
  def new
    @cheer = Cheer.new
  end

  def create
    @cheer = Cheer.new(params)
    @cheer.checkin_id = params[:checkin_id]
    @cheer.user_id = params[:user_id]

    if @cheer.save
      render :show
    else
      render json: @cheer.errors.full_messages, status: 422
    end
  end

  def destroy
    @cheer = Cheer.find_by(params[:id])

    if @cheer.user_id == @current_user.id
      @cheer.destroy
    else
      raise ['You can only delete your own cheers']
    end
  end

end

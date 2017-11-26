class Api::WhiskiesController < ApplicationController
  def new
    @whiskey = Whiskey.new(whiskey_params)
    render :new
  end

  def create
    @whiskey = Whiskey.new(whiskey_params)

    if @whiskey.save
      render :show
    else
      render json: @whiskey.errors.full_messages, status: 422
    end
  end

  def show
    @whiskey = Whiskey.find(params[:id])
    render :show
  end

  def index
    @whiskies = Whiskey.all
  end

  def edit
    @whiskey = Whiskey.find(params[:id])
  end

  def update
    @whiskey = Whiskey.find(params[:id])

    if @whiskey.update_attributes(whiskey_params)
      render :show
    else
      render json: @whiskey.errors.full_messages, status: 422
    end
  end

  private

  def whiskey_params
    params.require(:whiskey).permit(
      :name,
      :description,
      :image_url,
      :abv,
      :style_id,
      :distillery_id
    )
  end

end

class Api::WhiskiesController < ApplicationController
  def new
    @whiskey = Whisky.new(whiskey_params)
    render :new
  end

  def create
    @whiskey = Whisky.new(whiskey_params)
    @whiskey.image_url ||= "http://cdn.hiconsumption.com/wp-content/uploads/2016/06/Glencairn-Crystal-Whiskey-Glass-.jpg"
    
    if @whiskey.save
      render :show
    else
      render json: @whiskey.errors.full_messages, status: 422
    end
  end

  def show
    @whiskey = Whisky.find(params[:id])
    render :show
  end

  def index
    @whiskies = Whisky.all
    render :index
  end

  def edit
    @whiskey = Whisky.find(params[:id])
    render :edit
  end

  def update
    @whiskey = Whisky.find(params[:id])

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

class Api::WhiskeySearchesController < ApplicationController
  def index
    @whiskey_search = Whisky.top_five_results(params[:search][:query])
    render :index
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

end

class Api::WhiskeySearchesController < ApplicationController
  def index
    query = params[:search][:query]

    @whiskey_search = Whisky.top_five_results(query)
    render :index
  end

  private

  def search_params
    params.require(:search).permit(:query)
  end

end

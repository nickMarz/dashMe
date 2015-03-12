class WeatherController < ApplicationController
  def index
  end

  def getweather
    puts "get_weather"
    ForecastIO.configure do |configuration|
    configuration.api_key = '9fefc06933948618afa84ed187f222ac'

    @forecast = ForecastIO.forecast(params[:lat], params[:long])
    
  
    respond_to do |format|

    format.json {render json:  @forecast}
    end
   end
  end
end

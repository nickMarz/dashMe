class WeatherController < ApplicationController
  def index
  end

  def get_weather
    ForecastIO.configure do |configuration|
    configuration.api_key = '9fefc06933948618afa84ed187f222ac'

    @forecast = ForecastIO.forecast(params[:lat], params[:long])
    forecast.latitude
    forecast.longitude
  
    respond_to do |format|

    format.JSON (render JSON: @forecast)
    end
   end
  end
end

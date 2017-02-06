class WeatherController < ApplicationController
  def index
  end

  def getweather
    puts "get_weather"
    ForecastIO.configure do |configuration|
    # configuration.api_key = '9fefc06933948618afa84ed187f222ac'
    configuration.api_key = 'b24c99c8a340a3bc9343240fbab17346'
    

    @forecast = ForecastIO.forecast(params[:lat], params[:long])
    
    respond_to do |format|

    format.json {render json:  @forecast}
    end
   end
  end
end

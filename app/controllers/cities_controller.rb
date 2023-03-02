class CitiesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize

    def index
        # user = User.find_by(id: session[:user_id])
        # cities = City.joins(:landmarks).where(landmarks: { user_id: user.id })
        cities = City.all
        render json: cities, status: :created
    end

    def mycities
        user = User.find_by(id: session[:user_id])    
        cities = City.joins(:landmarks).where(landmarks: { user_id: user.id })
        render json: cities, status: :created
    end

    def create
        city = City.create(city_params)
        if city.valid?
        render json: city, status: :created
        else
        render json: { errors: city.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def mostlandmarks
        #I want to get the city with the most amount of landmarks associated
        #Get all cities
        cities = City.all
        #Grab the first city and get the count of the landmarks associated
        # city = City.joins(:landmarks).group(cities.id).order("count(landmarks.id)")
        max_city = nil
        highest_landmarks = 0
        cities.each do |city|
            if city.landmarks.count > highest_landmarks
                max_city = city
                highest_landmarks = city.landmarks.count
            end   
        end
        render json: city
    end

    private

    def city_params
        params.permit(:id, :name, :country, :population)
    end

    def authorize
        return render json: { errors: ["Unauthorized"] }, status: :unauthorized unless session.include? :user_id
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end

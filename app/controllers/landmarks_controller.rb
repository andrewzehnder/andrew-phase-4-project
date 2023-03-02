class LandmarksController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        landmark = Landmark.all.order(:id)
        render json: landmark
    end

    def create
        landmark = Landmark.create(landmark_params)
        if landmark.valid?
        render json: landmark, status: :created
        else
        render json: { errors: landmark.errors.full_messages }, status: :unprocessable_entity
        end
    end

    def show
        landmark = Landmark.find(params[:id])
        render json: landmark
    end

    def update
        landmark = Landmark.find(params[:id])
        landmark.update(landmark_params)
        render json: landmark
    end

    def destroy
        landmark = Landmark.find(params[:id])
        landmark.destroy
    end


private

    def landmark_params
        params.permit(:user_id, :city_id, :name, :description, :image_url)
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found
        render json: { errors: "Not Found." }, status: :unauthorized
    end

end

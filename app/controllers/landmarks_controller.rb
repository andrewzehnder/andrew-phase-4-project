class LandmarksController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found

    def index
        landmark = Landmark.all.order(:id)
        render json: landmark
    end

private

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

    def render_not_found
        render json: { errors: "Not Found." }, status: :unauthorized
    end

end

class CitiesController < ApplicationController
    rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity
    before_action :authorize

    private

    def authorize
        return render json: { errors: ["Unauthorized"] }, status: :unauthorized unless session.include? :user_id
    end

    def render_unprocessable_entity(invalid)
        render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end

class LandmarkSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :city_id, :name, :description, :image_url
end

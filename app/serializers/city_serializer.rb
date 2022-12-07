class CitySerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :population
end

class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :cities
end

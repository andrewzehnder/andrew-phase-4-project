class User < ApplicationRecord
    has_secure_password
    validates :username, presence: true, uniqueness: true
    has_many :landmarks
    has_many :cities, through: :landmarks
end

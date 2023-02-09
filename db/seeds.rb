# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'faker'
require 'bcrypt'

puts "🌱 Seeding..."

# Removing all existing data
User.destroy_all
City.destroy_all
Landmark.destroy_all

# Make 2 users
# John Doe
1.times do
    user = User.create(name: "John Doe", username: "john-doe", password_digest: BCrypt::Password.create('Password1'))

    1.times do
        city = City.create(
            name: Faker::Address.city,
            country: Faker::Address.country,
            population: Faker::Number.number(digits: 7)
        )
        
            landmark = Landmark.create(
                user_id: user.id,
                city_id: city.id,
                name: Faker::Mountain.name,
                description: "This is the most beautiful mountain ever!",
                image_url: "https://th.bing.com/th/id/OIP.x_B30dSus6CmS4ak4BAFxwHaEK?pid=ImgDet&rs=1"
            )
    end

    1.times do
        city = City.create(
            name: Faker::Address.city,
            country: Faker::Address.country,
            population: Faker::Number.number(digits: 7)
        )

            landmark = Landmark.create(
                user_id: user.id,
                city_id: city.id,
                name: Faker::Mountain.name,
                description: "This is the second most beautiful mountain ever!",
                image_url: "https://th.bing.com/th/id/R.42f37c98aa9dc9fcad55a7984b61e916?rik=rEQtTRgZLS67JA&riu=http%3a%2f%2fadventure-journal.com%2fwp-content%2fuploads%2f2015%2f08%2f15645148031_0dc930716d_o.jpg&ehk=%2fqBqqew73LMjOa18V%2b56%2bkunsB9EIV8VN5mpQHtDzhk%3d&risl=&pid=ImgRaw&r=0"
            )
    end
end

# Jane Smith
1.times do
    user = User.create(name: "Jane Smith", username: "jane-smith", password_digest: BCrypt::Password.create('Password2'))

    1.times do
        city = City.create(
            name: Faker::Address.city,
            country: Faker::Address.country,
            population: Faker::Number.number(digits: 7)
        )
        
            landmark = Landmark.create(
                user_id: user.id,
                city_id: city.id,
                name: "Statue of Rock",
                description: "This is the most beautiful statue ever!",
                image_url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/rock-sculptures-at-sunset-moment-of-perception.jpg"
            )
    end

    1.times do
        city = City.create(
            name: Faker::Address.city,
            country: Faker::Address.country,
            population: Faker::Number.number(digits: 7)
        )
        
            landmark = Landmark.create(
                user_id: user.id,
                city_id: city.id,
                name: "Statue of Honor",
                description: "This is the second most beautiful statue ever!",
                image_url: "https://weburbanist.com/wp-content/uploads/2008/06/memorial-monument-dedicated-heros-300x300.jpg"
            )
    end

end


puts "✅ Done seeding!"

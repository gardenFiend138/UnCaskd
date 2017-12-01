# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

100.times do

  name_choices = %w(Zelda, RickAndMorty, DragonBall).sample
  theme = %w(frogideas, sugarsweets, heatwave, daisygarden, seascape, summerwarmth, bythepool, duskfalling, berrypie, base).sample

  username = Faker::Name.unique.name
  email = usernamegsub(/\s+/, "") + '@gmail.com'
  password = 'password'
  image_url = "http://tinygraphs.com/squares/#{username}?theme=#{theme}&numcolors=4&size=220&fmt=svg"

  user = User.create(
    username: username,
    email: email,
    password: password,
    image_url: image_url
  )

  10.times do

    Checkin.create(
      body: Faker::Coffee.notes,
      rating: Random.rand(20...100),
      user_id: user.id,
      whiskey_id: Random.rand(1..5)
    )
  end


end

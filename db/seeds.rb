# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

Whisky.create(
  name: "Jack Daniels's Old No.7",
  description: "Mellowed drop by drop through 10-feet of sugar maple charcoal, then matured in handcrafted barrels of our own making. And our Tennessee Whiskey doesn’t follow a calendar. It’s only ready when our tasters say it is. We judge it by the way it looks. By its aroma. And of course, by the way it tastes. It’s how Jack Daniel himself did it over a century ago. And how we still do it today.",
  abv: 45,
  style: "Tennessee Whiskey",
  image_url: "https://i.pinimg.com/736x/67/62/d9/6762d93553e90fd20ad26080d644b4e1--jack-daniels-labels-jack-daniels-poster.jpg"
)

Whisky.create(
  name: 'Jim Beam',
  description:
  abv:
  style: 'Bourbon'
  image_url:
)

Whisky.create(
  name: 'Wild Turkey',
  description:
  abv:
  style: 'Bourbon',
  image_url: "https://seeklogo.com/images/J/Jim_Beam-logo-EEAE69F83E-seeklogo.com.png"
)

Whisky.create(
  name: 'Basil Hayden',
  description:
  abv: 49.5,
  style: 'Bourbon',
  image_url:
)

Whisky.create(
  name: 'Glenfiddich',
  description:
  abv:
  style: 'Scotch Whiskey',
  image_url:
)

Whisky.create(
  name: 'Laphroig',
  description:
  abv:
  style: 'Scotch Whiskey'
  image_url:
)

Whisky.create(
  name: 'Bulleit Rye',
  description:
  abv:
  style: 'Rye Whiskey',
  image_url:
)

Whisky.create(
  name:
  description:
  abv:
  style:
  image_url:
)
Whisky.create(
  name:
  description:
  abv:
  style:
  image_url:
)
Whisky.create(
  name:
  description:
  abv:
  style:
  image_url:
)
Whisky.create(
  name:
  description:
  abv:
  style:
  image_url:
)

100.times do

  name_choices = %w(Zelda, RickAndMorty, DragonBall).sample
  theme = %w(frogideas, sugarsweets, heatwave, daisygarden, seascape, summerwarmth, bythepool, duskfalling, berrypie, base).sample

  username = Faker::Name.unique.name
  email = username.gsub(/\s+/, "") + '@gmail.com'
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
      whiskey_id: Random.rand(1..10)
    )
  end
end

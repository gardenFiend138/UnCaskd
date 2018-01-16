# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

# COMMENT OUT BEFORE PRODUCTION

# Whisky.destroy_all
# User.destroy_all
# Checkin.destroy_all



Whisky.create(
  name: "Jack Daniels's Old No.7",
  description: "Mellowed drop by drop through 10-feet of sugar maple
    charcoal, then matured in handcrafted barrels of our own making.
    And our Tennessee Whiskey doesn’t follow a calendar. It’s only ready
    when our tasters say it is. We judge it by the way it looks. By its
    aroma. And of course, by the way it tastes. It’s how Jack Daniel
    himself did it over a century ago. And how we still do it today.",
  abv: 40,
  style: "Tennessee Whiskey",
  image_url: "https://i.pinimg.com/736x/67/62/d9/6762d93553e90fd20ad26080d644b4e1--jack-daniels-labels-jack-daniels-poster.jpg"
)

Whisky.create(
  name: 'Wild Turkey 101',
  description: "For more than 60 years, legendary Master Distiller
    Jimmy Russell has been crafting Wild Turkey 101 the right way. With
    a high rye content, this iconic bourbon is perfectly aged in American
    White Oak barrels with the deepest char for more character.",
  abv: 50.5,
  style: 'Bourbon',
  image_url: "https://upload.wikimedia.org/wikipedia/en/c/c7/Wild_Turkey_%28bourbon%29_logo.png"
)

Whisky.create(
  name: 'Basil Hayden',
  description: "To preserve the subtle sophistication that makes it so
    sharable, Basil Hayden’s is aged to the perfect expression of its
    novel, spicy-sweet flavor profile.",
  abv: 49.5,
  style: 'Bourbon',
  image_url: 'http://whiskeylofts.com/wp-content/uploads/2016/04/image-6.jpeg'
)

Whisky.create(
  name: 'Glenfiddich 12 Year',
  description: "Carefully matured in the finest American oak and European
    oak sherry casks for at least 12 years, it is mellowed in oak marrying
    tuns to create its sweet and subtle oak flavours.",
  abv: 40,
  style: 'Speyside Single Malt Scotch Whiskey',
  image_url: "https://www.glenfiddich.com/themes/gf-main-v2/images/glenfiddich_logo_fb.png"
)

Whisky.create(
  name: 'Laphroig 10 Year',
  description: "Our 10 Year Old is the original Laphroaig, distilled the
    same way today as when Ian Hunter invented it more than 75 years ago.
    It is the foundation of all other Laphroaig expressions. In making
    Laphroaig, malted barley is dried over a peat fire. The smoke from
    this peat, found only on Islay, gives Laphroaig its particularly
    rich flavour. Those enjoying the 10 Year Old will first notice the
    bold, smoky taste, followed by a hint of seaweed and a surprising
    sweetness. This full-bodied variant is the foundation of all
    Laphroaig expressions and comes with a long finish.",
  abv: 40,
  style: 'Scotch Whiskey',
  image_url: "http://static.wixstatic.com/media/45c952_9debeece6ecf4a869fd152842c39502e.jpg/v1/fill/w_630,h_468,al_c,q_80,usm_0.66_1.00_0.01/45c952_9debeece6ecf4a869fd152842c39502e.webp"
)

Whisky.create(
  name: 'Bulleit Rye',
  description: "Bulleit Rye is an award-winning, straight rye whiskey
    with a character of unparalleled spice and complexity. Released in
    2011, it continues to enjoy recognition as one of the highest quality
    ryes available.",
  abv: 40,
  style: 'Rye Whiskey',
  image_url: "https://i2.wp.com/www.bourbonblog.com/wp-content/uploads/2011/03/Bulleit-Rye-Logo.jpg"
)

Whisky.create(
  name: 'Buffalo Trace Bourbon',
  description: "Buffalo Trace Kentucky Straight Bourbon Whiskey is
    distilled, aged and bottled at the most award-winning distillery in
    the world. Made from the finest corn, rye and barley malt, this
    whiskey ages in new oak barrels for years in century old warehouses
    until the peak of maturity. The taste is rich and complex, with hints
    of vanilla, toffee and candied fruit. The smooth finish lingers on
    the palate. This will never change",
  abv: 40,
  style: 'Bourbon',
  image_url: "https://www.chartonhobbs.com/wp-content/uploads/2013/08/logos3_Buffalo-on-White.png"
)

Whisky.create(
  name: 'Pappy Van Winkle 15 Year',
  description: "This very rare, limited edition bourbon takes
    generations of distilling know-how to produce. Only the most
    careful and expensive distilling method can be used to create
    a whiskey as special as this one. Each barrel ages for 23 years
    and is carefully selected from the heart of the warehouse. This
    whiskey should be enjoyed neat.",
  abv: 53.5,
  style: 'Bourbon',
  image_url: "https://schaefers.com/wp-content/uploads/2014/12/23ylabel1.jpg"
)

Whisky.create(
  name: 'Chivas Regal 12 Year',
  description: "Chivas Regal 12 is a blend of many different malt and
    grain Scotch whiskies, matured for at least 12 years. This rich,
    smooth blend combines style with substance and tradition.",
  abv: 40,
  style: 'Blended Scotch Whiskey',
  image_url: "https://i.pinimg.com/originals/cc/3b/17/cc3b172c20a2e2a50699f12e9d3e196b.jpg"
)

Whisky.create(
  name: 'Jim Beam',
  description: "220 years of experience goes into every bottle. Along
    with corn, rye, malted barley, water, time, pride, and, of course,
    true passion. Isn’t it good to know some things never go out of
    style? Take a sip and you'll know what we mean.",
  abv: 40,
  style: 'Bourbon',
  image_url: 'https://images-na.ssl-images-amazon.com/images/I/81bVvHPWE4L._SX355_.jpg'
)

# use for master when creating new whiskies
# Whisky.create(
#   name:
#   description:
#   abv:
#   style:
#   image_url:
# )

all_users = []

guest = User.create(
  username: 'guest',
  email: 'guest@gmail.com',
  password: 'password',
  image_url: "http://tinygraphs.com/squares/guest?theme=base&numcolors=4&size=220&fmt=svg"
)

all_users << guest

10.times do
  theme = %w(frogideas sugarsweets heatwave daisygarden seascape summerwarmth
    bythepool duskfalling berrypie base).sample

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

  all_users << user
end


10.times do

  whiskey_notes = %w(smokey sweet savory maple coffee oak strong burn smooth adaptable
    aged
    alcoholic
    ambrosial
    approachable
    aromatic
    aromatized
    assertive
    award-winning
    balanced
    barrel-aged
    benchmark
    best-tasting
    bitter
    blended
    bold
    buttery
    caramel
    charcoal-filtered
    cheek-puckering
    chewy
    classic
    classical
    classically-styled
    clean
    clean-tasting
    clear
    cloudy
    cloying
    coarse
    cold
    complex
    conversational
    cool
    creamy
    crisp
    crystal-clear
    cutting-edge
    delectable
    delicate
    delicious
    delightful
    dense
    distilled
    distinct
    distinctive
    divine
    domestic
    double
    double-distilled
    dreamy
    dry
    easy-drinking
    effervescent
    electrifying
    elegant
    enhanced
    exceptional
    exhilarating
    exotic
    extra-dry
    extracted
    eye-opening
    famous
    filtered
    finest
    fizzy
    flavorful
    flavorsome
    floral
    fortified
    fractional-distilled
    fragrant
    fresh
    frigid
    fruit-forward
    fruity
    full-bodied
    fun-to-drink
    generous
    glacial
    golden
    hand-crafted
    hard
    harmonious
    heavy
    high-proof
    high-quality
    ice-cold
    iced
    ideal-for-mixing
    intense
    internationally-popular
    intoxicating
    invigorating
    inviting
    irresistible
    juicy
    legendary
    light
    light-bodied
    lighter
    likeable
    limited-edition
    lingering
    low-in-impurities
    lush
    luxurious
    medicinal
    medium-sweet
    mellow
    mild
    most popular
    mouth-warming
    mouthfillilng
    naturally-flavored
    neat
    neutral
    no after-burn
    notable
    numbing
    nutty
    oaky
    old-fashioned
    on the rocks
    one-of-a-kind
    original
    palatable
    peppery
    perfumed
    perfumy
    piquant
    pithy
    pleasant
    pleasing
    poignant
    popular
    preferred
    premium
    prized
    pronounced
    pungent
    pure
    quality
    quartz-filtered
    rare
    rarest
    refined
    refreshing
    rejuvenating
    restorative
    revitalizing
    revivifying
    reviving
    revolutionary
    rich
    robust
    romantic
    rough
    round
    rousing
    satisfying
    savory
    select
    self-indulgent
    sensational
    sensuous
    sharp
    signature
    silken
    silky
    simple
    sipping
    small batch
    smooth
    social
    soft
    soothing
    spicy
    spirity
    steely
    stiff
    straight
    straight-up
    straightforward
    strong
    stylish
    subtle
    superb
    superior
    supple
    surprisingly sweet
    sweet
    tangy
    tantalizing
    tart
    tasty
    tempting
    tingly
    traditional
    triple-distilled
    ultra-crisp
    ultra-premium
    ultra-smooth
    unbelievably smooth
    unequaled
    unique
    uniquely
    uniquely-aged
    versatile
    viscous
    warming
    well-balanced
    well-integrated
    well-structured
    zesty )

  all_users.shuffle!
  all_users.each do |user|

    num_description_words = Random.rand(4..8)
    body = []
    num_description_words.times do
      body << whiskey_notes.sample
    end

    Checkin.create(
      body: body.join(", "),
      rating: Random.rand(50...100),
      user_id: user.id,
      whiskey_id: Random.rand(1..10)
    )

    Cheer.create(
      checkin_id: Random.rand(1..100),
      user_id: user.id
    )
  end
end

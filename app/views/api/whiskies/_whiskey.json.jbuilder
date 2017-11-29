json.extract! whiskey,
              :id,
              :name,
              :description,
              :image_url,
              :abv,
              :style_id,
              :distillery_id

# get all of the checkins associated with a whiskey
json.set! :total_checkins, whiskey.checkins

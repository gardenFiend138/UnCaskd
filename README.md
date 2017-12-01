# README
# UnCaskd

## Welcome to the [UnCaskd](https://uncaskd-app.herokuapp.com/#/) Repo!
#### Grab a glass of your favorite whiskey (or non-whiskey) beverage, and discover your next obsession...
---
![whiskey-show-page](https://github.com/gardenFiend138/UnCaskd/blob/master/app/assets/images/screenshots/Screen%20Shot%202017-12-01%20at%203.27.41%20PM.png)
### Overview
---
This single page web application is a tribute to one of my favorite alternative social media sites--Untappd. UnCaskd is a place for people to come together and share their passion for discovering, savoring, and sharing whiskey! When you join UnCaskd, you can view other users' reviews, check out a specific whiskey's information page, and keep track of all the new whiskies you try with your personalized profile page, which includes your total checkins, your unique checkins, and allows you to view all of your past checkin ratings and comments. 

This is just the Beta release, and was completed in just over a week--be on the lookout for future updates, including: friendships, 'cheers' checkins, functional search bar, distillery information pages, photo uploads, Google map API integration for finding where your favorite whiskies are being sold, and even earn badges for achieving different whiskey tasting milestones! 

### Technologies Used
---
Not only was this project something that I wanted to build for years, but it allowed me to deepen my understanding of the various technologies I have been exploring over the past few months. I used PostgreSQL for the database, wrote the backend in Ruby, and relied on Rails as my web framework. I used AJAX to fetch data from the backend and get it to my frontend in the form of JSON objects, which made manipulating the data on the frontend much less time consuming and much more intuitive.

For frontend rendering, I used React so that componenets only re-rendered as needed, and used the Redux store as the single source of truth for the state of the app. On the frontend, I used mainly Javascript, and utilized JSX to render individual components. Styling was done using SASS.

![user-checkin-feed](https://github.com/gardenFiend138/UnCaskd/blob/master/app/assets/images/screenshots/Screen%20Shot%202017-12-01%20at%203.26.57%20PM.png)

I also used this project as an opportunity to integrate React componenets other developers have made to enhance the functionality and User Experience of the app. By using a slider for ratings, users can effortlesly pinpoint their exact rating on a scale of 100. Keeping the User Interface in mind, I used a circular loading progress tracker to display the reviews, which not only adds a nice aesthetic appeal, but users can also quickly tell at a glance which whiskies are worth their time.

![checkin-form](https://github.com/gardenFiend138/UnCaskd/blob/master/app/assets/images/screenshots/Screen%20Shot%202017-12-01%20at%203.28.49%20PM.png)
---
### Highlights 
---
Because UnCaskd is such a dynamic app, I had to find as many ways as I could to abstract out parts of code to make my components' render functions concise and readable. Below you can see, how I used functions to return pieces of each component. 

```JSX

  averageRating() {
    let ratings = [];

    this.checkins.map( checkin => ratings.push(checkin.rating));

    if (ratings.length > 0) {
      ratings = ratings.reduce( (prev, curr) => prev + curr);
      ratings = ratings / this.checkins.length;
      return Math.round(ratings);
    } else {
      return this.checkins.length;
    }
  }
  ```
  
  ```JSX
  
  UserRatingDisplay() {
    return(
      <div className='rating'>
        <CircularProgressbar
          percentage={this.props.checkin.rating}
          textForPercentage={ (WAT) => `${WAT}`}
         />
      </div>
    );
  }
```
Using this strategy, not only is the code easier to read and debug, but it's much more modular, and will allow me to implement future changes with less hassle. 

Using single components to render the user checkins and the whiskey list did present some challenges though, on account of me not planning on this when designing this project and laying out what I wanted the state to look like. Which leads me to my next point...

### Reflections and Next Steps
---
Not only did I learn so much more about React, the Redux cycle, setting state shape, and how to effectively integrate multiple technologies into a single app...but I had a blast doing it! This is a project I have wanted to build for years now, but never had the technocal skills. I'm beyond thrilled that I have built UnCaskd from the ground up, and cannot wait to continue to work on implementing the rest of the features I have envisioneda, and can't wait to continue to hone my skills and knowledgeset as a developer.

Thank you for taking the time to README--I hope you enjoy your stay!

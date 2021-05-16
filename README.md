# SEI-Project-Three - Icelander

A group project with [Karen Kaur](https://github.com/kkaur89), [Hamza Butt](https://github.com/HamzaaMB) and [Patrick Johnson](https://github.com/PaddyCello). I was responsible for the styling of this app as well as the authentication and show pages. 

# Deployment 
This app has been deployed with Netlify, click to view [Icelander](https://icelander.netlify.app/). 

# Getting Started
1. Access the source code via the 'Clone or download' button
2. In CLI, run `yarn`.
3. Run `yarn serve` in the backend and `yarn start` on the client side. 

# Goal and Timeframe:
Build a full-stack app with CRUD functionality in seven days.

# Technologies Used:
React Hooks
Express.js
Node.js
MongoDB
Mongoose
JavaScript
CSS
React-Bootstrap
Mapbox
GitHub
Netlify
Heroku

# API’s Used:
MapBox
React-Bootstrap


# Overview
We decided to make an app that would help users to plan road trips around Iceland, offering pre-made packages, functionality for saving destinations (and thus constructing custom packages), information on beauty spots and amenities, and interactive maps.

# Process
We began by writing some detailed pseudocode, outlining our ideas and strategies for both MVP and post-MVP features. We used Excalidraw to design wireframes for page layouts and user flow. Additionally, a Trello board was set up to assign tasks and keep these visible within the group. 

Merge conflicts were a particular fear for us, as this was our first experience of group collaboration on GitHub - we had all worked in pairs on the previous project, but knew that more people would involve more complication. Apart from maintaining visibility with tasks and avoiding overlaps, our other approach for minimising the risks involved us all working on separate feature branches, and only merging back into the development branch as a group, one person at a time. This meant that we could address merge conflicts before they became too multi-faceted, and that everyone was present to review any conflicts that needed fixing.

Non-authenticated functionality:
<img width="1436" alt="Screenshot 2021-05-11 at 12 23 09" src="https://user-images.githubusercontent.com/78035012/118381378-2ac93d80-b5e2-11eb-816e-e8d6ad45c253.png">
Homepage
- The homepage will allow you to signup or login and access one of two main landing pages. 

Explore All Packages
<img width="1436" alt="Screenshot 2021-05-11 at 12 39 49" src="https://user-images.githubusercontent.com/78035012/118381384-50564700-b5e2-11eb-8e7b-2c4e3b875139.png">
- Explore every pre-made package by summary on this page. 
- Functionality to filter by season. 
- This page uses the Bootstrap carousel for the rotating background images. 
- The packages are displayed using CSS. I took a keen interest in expanding my CSS skills in this project. 

Single Package 
<img width="1436" alt="Screenshot 2021-05-11 at 13 16 18" src="https://user-images.githubusercontent.com/78035012/118381403-7c71c800-b5e2-11eb-9f2e-9da47034709e.png">
- For each package the itinerary is split by day and an activity, hotel and restaurant is displayed for each.
- A new map is rendered showing only the markers for this particular package - with the ability to click on and zoom into the map. 
- To render the buttons on this page we needed to set the duration of each package to state and render the corresponding number of buttons.
```
useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get('/api/packages')
      const durationData = data[id - 1].duration
      setDuration(durationData)
    }
    // console.log('packageData', packageData)

    getData()
  }, [duration])
```
- With the duration saved to state we were able to conditionally render buttons in our return statement. 
- One of the challenges of this page included repetition of the rendering of the itinerary by day. The attractions were displayed twice and after thoroughly checking the code of that component we were unable to find the reason. We soon realised the problem was within another component which this showPackageTile was being fed into. We found a duplicate .map function on the ShowPage, removing this resolved our issue.

Create Custom Trip
<img width="1439" alt="Screenshot 2021-05-11 at 12 55 01" src="https://user-images.githubusercontent.com/78035012/118381452-da061480-b5e2-11eb-97f0-930ac07f6631.png">
- Markers, zoom control and descriptive popups were built and integrated successfully. 
- When the user is authenticated the user is able to save an attraction, hotel or restaurant to their profile. 
<img width="1435" alt="Screenshot 2021-05-11 at 13 23 47" src="https://user-images.githubusercontent.com/78035012/118381458-f43ff280-b5e2-11eb-8089-dbd22954b164.png">
- When logged in a user can save and rate any location. 
- The saved locations are added to the user-profile, where they can also view the average rating for each.
<img width="1437" alt="Screenshot 2021-05-11 at 13 30 07" src="https://user-images.githubusercontent.com/78035012/118381460-fc982d80-b5e2-11eb-868f-10ac5db55a85.png">
-A PUT request was not appropriate for this application - this had always been presented to me as being interchangeable with a PUT request, but their use cases are actually quite different. We discovered that a PATCH requests do not require the full data set for an item in order to make any changes - making it a more suited route. Additionally, as the PATCH request was on just one field in the User model (savedPlaces), the controller on the back end would not be difficult to write. Further research revealed that Mongoose even has a built-in method, .addToSet(), that would push the ID of the place to be saved into the user’s savedPlaces array - but only if that ID was not already present in the array. As we were already concerned about how to deal with duplicate entries, this was a wonderful discovery.
```
const handleClick = async () => {
    setSaved('Saved! View your profile to see your saved places.')
    setButton(false)
    const token = window.localStorage.getItem('token')
    await axios.patch(`/api/places/${_id}`, { _id }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
```

# Deployment
We chose to deploy our back end to Heroku, and our front end to Netlify - and did this as a group, as Heroku in particular involved a whole new world of error messages to interpret. This was exacerbated by copious inconsistencies between the Heroku docs, Stackoverflow and Medium posts, and YouTube tutorials that we were consulting, and also by the recent migration of MongoDB services away from Heroku - developers now have to rely on third-party hosting via MongoDB Atlas, and somehow make this and Heroku communicate properly. Hours of trial and error finally got us to a successful deployment… apart from our interactive maps not rendering. More research revealed that changing to an older version of react-map-gl in our package.json (5.2.5, to be precise) would fix the issue.

# Wins & Future Features
On the whole, I am very happy with how this has turned out; but if I was to add or improve features, I would probably focus on the following:
- Find as many opportunities as possible for refactors, with a view to improving the page load speed (the downside of having so many glorious hi-res images of Icelandic scenery)
- Add functionality for users to remove places from their profiles
- Add functionality for users to compile certain saved places into different packages, and have these saved as groups
- Add onHover popups to the package map
- Find a working plugin for displaying routes, rebuilding maps from scratch if it comes to it


# Key Learnings
- The importance of planning and prioritising on a daily basis. 
- The benefit of daily stand-ups and communication between all members of the team. 
- The importance of sharing issues and working collaboratively to solve them. 



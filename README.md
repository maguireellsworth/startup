# Keep Me Posted

[My Notes](notes.md)

This application will allow you to follow your favorite developers and makers. Upon entering the application you will be taken to the homepage where you will find all the latest post-its (updates) from the projects you are following. You can also select a specific creator to see the last 10 updates that they have posted. Or create your own post-its for you own projects.


## 🚀 Specification Deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] Proper use of Markdown - used markdown cheat sheet for all added content
- [x] A concise and compelling elevator pitch - added elevator pitch that even my grandma is proud of
- [x] Description of key features - Short sweet and to the point list of key features 
- [x] Description of how you will use each technology - Each technology is accounted for and ready for action
- [x] One or more rough sketches of your application. Images must be embedded in this file using Markdown image references. - Van goh esque rendition of my beautiful website

### Elevator pitch

Too many indie developers get caught up in the development that their paying followers (go-fund-me, kickstarter, etc.) dont get updates, start to believe they've been scammed, and eventually start to demand their money back. That's where Keep Me Posted comes in. It's a low stress, low upkeep, and fun way for makers to tell their fans that they're still alive and working on their next favorite indie game. Posts can be as simple as a screenhot, heck, tell them you got out of bed today! Keep everyone updated on Keep Me Posted!

### Design

![Design image](/Photos/KMPmockup%20P2.png)


### Key features

- Login, Logout, Register
- Follow developers/makers
- Ability to filter which posts you see
- Post your own updates


### Technologies

I am going to use the required technologies in the following ways.

- **HTML** - Correct uses of HTML structures including website header, options, and post-its. There will be two seperate pages: one for the login and another for the post-its.
- **CSS** - Used to create a message board esque front page that has lots of color.
- **React** - Reactive webdesign that allows the user to customize what is rendered on their frontpage and interact with the posts of those they follow.
- **Service** - Will be used for the following:
     - Login
     - Retrieve posts
     - Recieve user interactions with posts
- **DB/Login** - Will be used for the following:
     - Register users
     - Store users, following lists, posts, and post interactions
     - Can't make posts unless authenticated
- **WebSocket** - Notification system for post interaction and automatic loading of any new post-its

## 🚀 AWS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Server deployed and accessible with custom domain name** - [My server link](https://keepmeposted.click).

## 🚀 HTML deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **HTML pages** - I added a login page, home page, settings page, and about page
- [x] **Proper HTML element usage** - Still not completely sure the specific use case of each but to the best of my knowlegde they are correct
- [x] **Links** - All the pages on my website are linked to each other through form submission or the links in the header
- [x] **Text** - Each post contains a title a body for content and a signiture at the bottom
- [x] **3rd party API placeholder** - Couldn't think of a third party applicable to my website so i will just display the weather in the corner and get that through some weather api
- [x] **Images** - Images are placed in posts on the home page
- [x] **Login placeholder** - login is located on index.html
- [X] **DB data placeholder** - Posts will all be retrieved from the database
- [x] **WebSocket placeholder** - Posts will be added to feed when new posts are made

## 🚀 CSS deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Header, footer, and main content body** - I added a header and a sticky footer to all pages and correct content body elements where applicable.
- [x] **Navigation elements** - Navagation elements in the header are no longer ugly. Simple but effective. Plus an easter egg if you find it(sorry not sorry)
- [x] **Responsive to window resizing** - A bit janky at weird sizes but full size monitor and standard phones sizes are all flawless.
- [x] **Application elements** - Found a color palette online that I liked and made posts look like post-its
- [x] **Application text content** - Used 'Fira Code' for my font as it is kind of retro but not annoying
- [x] **Application images** - Images now fit in their parent containers and are all consistent sizing

## 🚀 React part 1: Routing deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Bundled using Vite** - website is viewable from localhost:5173 and updates whenever a change is made.
- [x] **Components** - app, login, home, post, and about are all seperate components.
- [x] **Router** - navigation is possible through the router paths which load each component successfully.

## 🚀 React part 2: Reactivity

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **All functionality implemented or mocked out** - I have implemented the login and logout feature, posts can be made, and "new" posts are automatically loaded. LocalStorage is used for persistant data saving and a fake call to an api for the weather is being made.
- [x] **Hooks** - I am using useState for localStorage saving, and useEffect for tracking state changes such as new posts being made.

## 🚀 Service deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [x] **Node.js/Express HTTP service** - Installed express and used it for server
- [x] **Static middleware for frontend** - used basic endpoints for all functionality
- [x] **Calls to third party endpoints** - calling to both ip-api to get location of client and weatherapi to get relevant weather for said location of client
- [x] **Backend service endpoints** - basic endpoints for all functionality
- [x] **Frontend calls service endpoints** - calling all backend endpoints when needed, even the websocket emulation

## 🚀 DB/Login deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **User registration** - I did not complete this part of the deliverable.
- [ ] **User login and logout** - I did not complete this part of the deliverable.
- [ ] **Stores data in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Stores credentials in MongoDB** - I did not complete this part of the deliverable.
- [ ] **Restricts functionality based on authentication** - I did not complete this part of the deliverable.

## 🚀 WebSocket deliverable

For this deliverable I did the following. I checked the box `[x]` and added a description for things I completed.

- [ ] **Backend listens for WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Frontend makes WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **Data sent over WebSocket connection** - I did not complete this part of the deliverable.
- [ ] **WebSocket data displayed** - I did not complete this part of the deliverable.
- [ ] **Application is fully functional** - I did not complete this part of the deliverable.

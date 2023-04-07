# foodieClub - Frontend

foodieClub project portfolio has been created for educational purposes only as the 5th project in the Code Institute’s full stack development program.

Using the principles of UX design and the agile development methodology, this project was developed using React that handles all the frontend functionality including user profiles, posts, comments, likes, bookmark posts, add recipes to posts, followers, authentication, authorization and more.

foodieClub is an application where users can create their own online posts about their favorite food, there a funtionality to add recipes to the post while also being able to see the posts and recipes of other users. Via commenting and likes the users can engage with each other and share their recommendations.

Please note, this project is fairly similar to the walkthrough project Moments of Code Institute as I used that as baseline due the complextity of this new front-end library. I have tried to customize this project as much as possible within the timeline I had.

# Preview

![foodieClub Logo](./docs/readme-testing-images/foodieclub.png)

You can view the live deployed backend here: <a href="https://foodieclub-drf-api.herokuapp.com/" target="_blank"> foodieClub DRF-API </a>

You can view the live site here: <a href="https://foodieclub.herokuapp.com/" target="_blank"> foodieClub App </a>

The repository for the frontend application can be found here:  <a href="https://github.com/henryl74/foodieclub" target="_blank"> foodieClub React </a>

# Contents

* [Flowchart](<#flowchart>)
* [Agile Methodology](#agile-methodology)
* [User Stories](#user-stories)
* [Design](#user-stories)
* [Features](#user-stories)
* [Future Features](#user-stories)
* [Technologies Used](#technologies-used)
* [Development](#technologies-used)
* [Testing](<#testing>)
  * [Bugs Fixed](./docs/testing.md#bugs-fixed)
* [Deployment](#deployment)
* [Credits](<#credits>)
* [Acknowledgements](<#acknowledgements>)

# Flowchart

Flowchart was created before I created the project, which gave me an idea of which user has access to which page and what each link should be doing.

To accomplish this I used [LucidChart](https://lucid.co/).

![foodieClub Flowchart]()

[Back to top](<#contents>)

## Agile Methodology

The principles of agile methodology were utilized during the project. By assigning user stories to issues and taking advantage of the GitHub Kanban board functionality, the necessary goals and priorities throughout the project could be well defined. In addition, labels were used to further define the priority of each user story in the Kanban board.

[Back to top](<#contents>)

## User Stories

  -   #### First Time Visitor Goals

        - As a user I can view a NavBar from every page so that I can navigate easily between pages
        - As a user I can can navigate through pages quickly so that I can view content seamlessly without page refresh
        - As a user I can create a new account so that I can access all the features for signed up users
        - As a user I can sign in to the app so that I can access functionality for logged in users
        - As a user I can tell if I am logged in or not so that I can log in if I need to
        - As a user I can maintain my logged-in status until I choose to log out so that my user experience is not compromised
        - As a logged out user I can see sign in and sign up options so that I can sign in/sign up
        - As a user I can view user's avatars so that I can easily identify users of the application
        - As a logged in user I can create posts so that I can share my food recipes with everybody
        - As a user I can view the details of a single post so that I can learn more about it
        - As a logged in user I can like a post so that I can show my support for the posts that interest me
        - As a user I can view all the most recent posts, ordered by most recently created first so that I am up to date with the newest content
        - As a user I can search for posts with keywords, so that I can find the posts and user profiles I am most interested in
        - As a logged in user I can view the posts I liked so that I can find the posts I enjoy the most
        - As a logged in user I can view content filtered by users I follow so that I can keep up to date with what they are posting about
        - As a user I can keep scrolling through the images on the site, that are loaded for me automatically so that I don't have to click on "next page"
        - As a user I can view the posts page so that I can read the comments about the post
        - As a post owner I can edit my post title and description so that I can make corrections or update my post after it was created
        - As a logged in user I can add comments to a post so that I can share my thoughts about the post
        - As a user I can see how long ago a comment was made so that I know how old a comment is
        - As a user I can read comments on posts so that I can read what other users think about the posts
        - As an owner of a comment I can delete my comment so that I can control removal of my comment from the application
        - As an owner of a comment I can edit my comment so that I can fix or update my existing comment
        - As a logged in user I can bookmark a post so that I can have a section just for my favourites recipes
        - As a logged in user I can add a recipe to my post so that to encourage user engagement with post
        - As an owner of a recipe I can delete my recipe so that I can control removal of content from the application
        - As a owner of a recipe I can edit my recipe so that I can fix or update my existing recipe
        - As a user I can view other users profiles so that I can see their posts and learn more about them
        - As a user I can see a list of the most followed profiles so that I can see which profiles are popular
        - As a user I can view statistics about a specific user: bio, number of posts, follows and users followed so that I can learn more about them
        - As a logged in user I can follow and unfollow other users so that I can see and remove posts by specific users in my posts feed
        - As a user I can view all the posts by a specific user so that I can catch up on their latest posts, or decide I want to follow them
        - As a logged in user I can edit my profile so that I can change my profile picture and bio
        - As a logged in user I can update my username and password so that I can change my display name and keep my profile secure

[Back to top](<#contents>)

* # Technologies Used

    * ## Languages

        * [JavaScript](https://www.javascript.com/)
        * [HTML5](https://en.wikipedia.org/wiki/HTML/)
        * [CSS3](https://en.wikipedia.org/wiki/CSS)

    * ## React Dependencies

        * [NPM](https://www.npmjs.com/package/node)<br>
          Package manager used to install dependencies.
        * [React Bootstrap](https://react-bootstrap.github.io/)<br>
          Was used to style the website, add responsiveness and interactivity.
        * [Axios](https://axios-http.com/docs/intro)<br>
          As the HTTP client for the app.
        * [JWT Decode](https://www.npmjs.com/package/jwt-decode)<br>
          To help decoding JWTs token which are Base64Url encoded.
        * [react-infinite-scroll-component](https://www.npmjs.com/package/react-infinite-scroll-component)
          A component to make the post load as an infinite scroll.
        * [react-router-dom](https://www.npmjs.com/package/react-router-dom)<br>
          Bindings for using React Router in web applications.
        * [ESLint](https://eslint.org/)<br>
          ESLint was used to evaluate all the React.js code.
        * [Prettier](https://prettier.io/docs/en/index.html)<br>
          Prettier was used to enforce a consistent code style across my entire work

    * ## Frameworks - Libraries - Programs Used

        * [React](https://reactjs.org/)<br>
          Advanced front-end JavaScript library for building user interfaces
        * [Bootstrap](https://react-bootstrap.github.io/)<br> 
          Popular CSS Framework for developing responsive and mobile-first websites
        * [Font Awesome](https://fontawesome.com/)<br>
          A font and icon toolkit based on CSS
        * [Google Fonts](https://www.django-rest-framework.org/)<br>
          A library of 1482 open source font families and APIs for convenient use via CSS
        * [ElephantSQL](https://www.elephantsql.com/)<br>
          ElephantSQL is a PostgreSQL database hosting service were the database for foodSNAP was created
        * [Git](https://git-scm.com/)<br>
          Git was used for version control by utilizing the Gitpod terminal to commit to Git and push to GitHub
        * [GitHub](https://github.com/)<br>
          GitHub is used to store the project's code after being pushed from Git
        * [Heroku](https://id.heroku.com)<br>
          Heroku was used to deploy the live project
        * [W3C - HTML](https://validator.w3.org/)<br>
          W3C- HTML was used to validate all the HTML code
        * [W3C - CSS](https://jigsaw.w3.org/css-validator/)<br>
          W3C - CSS was used to validate the CSS code
        * [Google Chrome Dev Tools](https://developer.chrome.com/docs/devtools/)<br>
          To check App responsiveness and debugging
        * [Figma](https://www.figma.com/)<br>
          To build the logo and icon for the project

    * ## Other Technologies

        * [Stackoverflow](https://stackoverflow.com/)
        * [Flowchart](https://lucid.app/documents#/documents?folder_id=home)
        * [Cloudinary](https://cloudinary.com/)
        * [Slack](https://slack.com/intl/en-gb/)

[Back to top](<#contents>)

* # Development

    * ## Custom Components

        * Asset.js was created to display a spinner when data is being fetched to notify the user that an action is being performed.
        * Avatar.js was created to display the users profile image throughout the app.
        * DropdownOptions was created to display options to the user in a responsive way, such as the option to either edit or delete a post.
        * NavBar.js was created to display the navigation menu and display different options to the user depending on authentication.
        * NotFound.js as created to display a message to the user if the content they are looking for does not exist.

    * ## Custom Context

        * CurrentUserContext.js was created to get the current users authentication state, check if the user needs to sign up and also to redirect the user to the signin page if not signed in.
        * ProfileDataContext.js was created to setProfileData, handleFollow, handleUnfollow of user profiles and access this data throughout the app.

[Back to top](<#contents>)

# Testing

I have included testing details in a separate document called [Testing.md](./docs/testing.md)

[Back to top](<#contents>)

## Deployment

Git and GitHub are used for version control. React.js is the frontend language, and can't be displayed with GitHub alone, To live preview my project, I used Heroku.

## Deployment to Heroku

### 1. Create your Heroku app
* Navigate to the Heroku website
* Create a Heroku account by entering your email address and a password (or login if you have one already).
* Activate the account through the authentication email sent to your email account
* Click the **new button** on the top right corner of the screen and select create a new app from the dropdown menu.
* Enter a unique name for the application.
* Select the appropriate region for the application.
* Click create app
* In the Heroku dashboard click on the Resources tab
* Scroll down to Add-Ons, search for and select 'Heroku Postgres' / Now replaced by 'ElephantSQL'
* In the Settings tab, scroll down to 'Reveal Config Vars' and add the `DATABASE_URL` as key, the value should be the ElephantSQL database url you just copied.

### 3. Heroku Final Deployment

1. In the 'Deployment method' section select 'Github' and click the 'connect to Github' button to confirm.
2. In the 'search' box enter the Github repository name for the project
3. Click search and then click connect to link the heroku app with the Github backend repository. The box will confirm that heroku is connected to the repository.
4. In 'manual deploy' section, click 'deploy branch'
5. Once the build log is finished it will show open app button, click there to see deployed app.

[Back to top](<#contents>)

## Credits

- [Code Institute walkthrough](https://codeinstitute.net/) as inspiration and code examples, the code institute walkthroughs "Django REST Framework" was referenced during the development cycle of this API.

- [Django Documenation](https://www.djangoproject.com/) was used to provide examples of code solutions and Django functionality.

- [Django YouTube Tutorial on how to create a Blog](https://www.youtube.com/watch?v=n-FTlQ7Djqc&list=PL4cUxeGkcC9ib4HsrXEYpQnTOTZE1x0uc)

- [Python Django Web Framework - Full Course for Beginners](https://www.youtube.com/watch?v=F5mRW0jo-U4)

- [Python Django 7 Hour Course](https://www.youtube.com/watch?v=PtQiiknWUcI)

- [Stackoverflow](https://stackoverflow.com/)

- [Slack](https://slack.com/intl/en-gb/) community support.

- Code Institute - Tutor Assistance, BIG THANK YOU for all your support, suggestions and help!


[Back to top](<#contents>)

## Acknowledgements

- Again, the online tutors for all their help.
- The Code Institute slack community.
- All my classmates for constantly sharing new ideas in our dedicated slack channel.
- Stack Overflow question and answer website.
- My mentor for this project Marcel Mulders, thank you for all your all your guidance and support given, I learned a lot throughout our sessions.
- My family, THANK YOU for being always part of the team and this journey.
- Last but not least Code Institute student support team, for being there for us.

[Back to top](<#contents>)
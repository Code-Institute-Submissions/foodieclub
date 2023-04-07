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

        * [JavaScript](https://www.python.org/)
        * [HTML5](https://www.python.org/)
        * [CSS3](https://www.python.org/)

    * ## Libraries/Framework

        * [React](https://www.djangoproject.com/) - Advanced front-end JavaScript library for building user interfaces
        * [Bootstrap](https://www.django-rest-framework.org/) - Popular CSS Framework for developing responsive and mobile-first websites
        * [Font Awesome](https://www.django-rest-framework.org/) - A font and icon toolkit based on CSS
        * [Google Fonts](https://www.django-rest-framework.org/) - A library of 1482 open source font families and APIs for convenient use via CSS

    * ### Libraries/Module Installed

        * 
        * 
        * 
        * 
        * 
        * 
        * 

    * ## Other Technologies

        * [Stackoverflow](https://stackoverflow.com/)
        * [Git](https://git-scm.com/)
        * [Github](https://github.com/)
        * [Gitpod workspace](https://gitpod.io/workspaces)
        * [Heroku](https://dashboard.heroku.com/apps)
        * [Flowchart](https://lucid.app/documents#/documents?folder_id=home)
        * [Cloudinary](https://cloudinary.com/)
        * [ElephantSQL](https://www.elephantsql.com/)
        * [CI Python Linter](https://pep8ci.herokuapp.com/)
        * [Slack](https://slack.com/intl/en-gb/)

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
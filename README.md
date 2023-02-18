# phase3-project

Phase 4 Project - Visit New Landmarks!

## Description

This single page application was created to display and allow for adding/editing/removing landmarks that a user has visited. It has also been created with user creation and authentication to allow only a logged in user to create landmarks, while only allowing the creator of the landmark to be able to edit and delete a landmark. Another logged in user can see others landmarks, but it's ready only. You are also able to see your cities which is linked through a many-to-many relationship through landmarks. Logging out will remove access to both landmarks and cities pages.

## Installation

GitHub Repo: https://github.com/andrewzehnder/andrew-phase-4-project

To get this page running, you will need to get the front end running with "bundle install", "npm install --prefix client" then "npm start --prefix client" and start the backend with "rails setup" then "rails s" to start the server.

## Usage

The home page was created as a landing page to give some instruction. All pages other than login are hidden behind authentication. To start, you can click login. If you don't have a user, you can click the button to go create a user/signup. After that, you can login. Once logged in, you will now see Landmarks and My Cities in the nav bar. You can see other user's landmarks but not edit or delete. In order to add a landmark, first you will need to add a city to link them. Once you have a city, go add a new landmark and now you can see this landmark can be edited or deleted. 

Logging back out will take you back to the login page and remove landmarks and my cities as there's no longer an authenticated user.


## Requirements
Use a Rails API backend with a React frontend.
Have at least three models on the backend, that include the following:
At least one reciprocal many-to-many relationship (implemented by using 2 has-many-through relationships). Note: in order to accomplish this, your project must include a joins table. This joins table must include a user submittable attribute.
- Users, Landmarks, Cities -> Users to Cities through many-to-many.
Full CRUD actions for at least one resource. The update action should be implemented using a form that is pre-filled with existing values for the object. On submission of the form, the object should update. Note: Using a like button or similar will not meet the update requirement.
- Full CRUD for Landmarks.
Minimum of create and read actions for EACH resource.
- Completed
Follow RESTful routing convention for backend routes.
- Completed
Active Record validations must be present on your models for most attributes.
- Validations on users
Use controller validations to alter back end json response to front end. The response should pass your object if the creation, update, or deletion succeeds. However, the response should pass error messages to the front end and display them if the action fails. HINT: Utilize record.errors.
- Errors implemented and passed through and displayed on the front end.
Properly update front end state upon successful response from a POST, PATCH, or DELETE request. That is to say, you should NOT rely on another GET request or redirect to update front end state of your application.
- Completed
Have at least three different client-side routes using React Router. Be sure to include a nav bar or other UI element that allows users to navigate between routes. Follow RESTful convention where applicable.
- Completed
Implement authentication/authorization, including password protection. A user must be able to:
sign up with a new user account,
log in to the site with a secure password and stay logged in via user ID in the session hash, and
log out of the site.
- Completed

## Acknowledgement

Images:
image_url: "https://th.bing.com/th/id/OIP.x_B30dSus6CmS4ak4BAFxwHaEK?pid=ImgDet&rs=1"
image_url: "https://th.bing.com/th/id/R.42f37c98aa9dc9fcad55a7984b61e916?rik=rEQtTRgZLS67JA&riu=http%3a%2f%2fadventure-journal.com%2fwp-content%2fuploads%2f2015%2f08%2f15645148031_0dc930716d_o.jpg&ehk=%2fqBqqew73LMjOa18V%2b56%2bkunsB9EIV8VN5mpQHtDzhk%3d&risl=&pid=ImgRaw&r=0"
image_url: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/rock-sculptures-at-sunset-moment-of-perception.jpg"
image_url: "https://weburbanist.com/wp-content/uploads/2008/06/memorial-monument-dedicated-heros-300x300.jpg"

## Video Walk-Through
https://youtu.be/QKCf_hQNnZ4 

## Blog on Material UI
https://medium.com/@azehnder2/add-authentication-to-your-app-a0c6912d684f 


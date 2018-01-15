## Synopsis

This is a React-Redux application with a simple authentication system on the backend (Node.js + Express). The application fetches events from
EventBrite API basing on user's location. It has features of event search via type, category, price, date or location of event. Also, you can
sign in/up ( authentication system is based on jwt tokens) which will grant you access to the create event page. You can create event and save it
in the application db (not in eventBrite one) but cannot view it though (I'll probably finish this feature in the future).

## Motivation

I've build this app in attempt to better learn React and Redux, namely async actions, animations, form validation using Redux-form and custom
validators, Sass, flexboxes for layout as well as better grasping on testing with Jest and enzyme

## Installation

You need to clone repository, run npm install in the root and `server/server` directory. You also need to provide OAuthToken and client secret
for EventBrite API (you can obtain them via registering an app [here](https://www.eventbrite.com/developer/v3/)). In addition, you need to register
an app in google developers and obtain an APIkey for getting user's location. You also need to provide url to you app (can be localhost). All 
this data is kept in ENV.js, which resides in the root directory.

[DEMO](https://event-finder-turisap.herokuapp.com/)

Deployed link : https://note-taker-rossb.herokuapp.com/
Description
An app used to create and store entered notes, using express.js and node. 

Table of Contents

Installation
To install necessary dependencies, run the following command:

npm i express

About
This project came with front-end code included, but needed work done on the server.js file in order to properly post and retrieve information to and from the db.json, as well as creating routes to render the HTML files. The process initially seemed quite complex because I was not initially able to tink of a way to accomplish this without including a new model and route file as well, however once I realized that the relevant code could be completed within the server file things quickly fell into place. If you would like to try the app, simply use the link to find the deployed app at Heroku, click the link to the note page and write yourself a note. It can be remembered, and later deleted if need be. Thanks!

Demo

<img src="public\assets\images\note-taker-demo.gif"/>
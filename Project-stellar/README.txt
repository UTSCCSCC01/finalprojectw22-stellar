***NEED TO INSTALL***
node.js, MongoDB

if ur using VScode: download the extenion EGS language support to have syntax highlighting inside layout.ejs



***Important Commands***

First command to run is below:
"npm i express ejs express-ejs-layouts" This will install all the dependencies in node modules locally. 
	(a folder node_modules should appear in the same folder as server.js)
	(do not push node_modules to github as it is too large and should stay local)
	(i already added it to the .gitignore file so it shouldn't be an issue)

The command below allows us to refresh and restart our server everytime a change is made in our work:
"npm i --save-dev nodemon"

in order to get our models integrated, we will use MongoDB locally
"npm i mongoose" //installing the library "mongoose" which will allows to integrate with mongoDB inside our app.

in order for our app to run our database URL u need to run the command below once for inital setup.
"npm i --save-dev dotenv" //importing the library "dotenv" which allows us to load our env variables into our app.



To start the local server, run the command below.
"npm run devStart" (press "control + C" in the bash terminal to terminate the server)
after this command, open a webapp and in the URL area type "localhost:3000" to connect to the server.
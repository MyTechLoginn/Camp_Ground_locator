**_ For self Recording the Sequence of Main Steps in Project_**
May start with the boilerplate from Express.js document at :https://expressjs.com/en/5x/starter/hello-world/
npm init -y
npm i express mongoose ejs
Check : nodemon --version
npm install -g nodemon (if not already installed)
Check at : http://localhost:3000/ [By applying : nodemon app.js]
Note : 'res.send' will display 'string' in (), & 'res.render' will display the 'page' in ()
==========================================================
First view is added
views/home.ejs
along with the necessary changes in app.js
==========================================================
Add Campground Basic Model
making : models/campground.js
and the necessary changes in app.js, such as mongoes connection.
==========================================================

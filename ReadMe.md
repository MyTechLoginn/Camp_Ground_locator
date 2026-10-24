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
Add first route after the Campground Basic Model
i.e. app.get(/makecampground)... added in app.js
check it at :http://localhost:3000/makecampground
also verify in DB : yelp-camp> db.campgrounds.find()
==========================================================
Seed the Campgrounds
First making the following :
i) seeds/cities.js
ii)seeds/seedHelpers.js
iii)seeds/index.js
Then seeding using :node seeds/index.js
and checking in DB : db.campgrounds.find()
==========================================================
Add Campgrounds Index Route
Delete route : app.get('/makecampground,...) from app.js
and Add: app.get('/campgrounds ...)
Make : views/campgrounds/index.ejs
==========================================================
Add Campground Show Route
Make show route in app.js
Add views/campgrounds/show.ejs
Finally, using hyperlinks we are able to access the show page of any camp-ground listed, by using the same link of index route. i.e. : http://localhost:3000/campgrounds
==========================================================
Add Two Routes : New and Create
Make : views/campgrounds/new.ejs
Add two routes "New" and "Create", also make the necessary changes in show.ejs
==========================================================
Add Edit and Update Routes
Make two routes one for the edit form and second for submitting that form in app.
Make views/campgrounds/edit.ejs
Run : npm i method-override (since,forms only send a GET and POST request from a browser)
==========================================================

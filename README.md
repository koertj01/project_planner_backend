# Project_Planner
Project Planner

### End points
GET, POST: /users
PATCH, DELETE: /users/:id


### Todo list
* Add new product via scanning/taking an image of said product
* Storing that image with an associated product ID 
* Generate a QR code that can later be printed
* Ability to scan a qr code and it populates whatever is assigned to that code 
 ** codes can link to single items or a group such as an entire fridge
* Store the QR code in an images folder referenced with product ID
* Patch/update a product once an expiratory data is reached { This requires an additional field be added to the model }
* Add controller for Push Notifications should only 'GET' 
* Twilio
* Could just have the app send an email with an update on all things within a set of rules IE: these items will expire in 2days etc

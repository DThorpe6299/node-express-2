Bug #?: BCRYPT_WORK_FACTOR is below the standard today. Changed it to 12.

Bug#1: When registering, the default of admin column is false but even when a user enters "true" in the req.body, the user admin status is false in the database.

Bug#2: in the createToken() function when an admin logs in, their admin status in the token is set to false.

Bug#3: in the '/users/update' route, the route is not accessible to the user if they are not an admin so the requireAdmin middleware was removed from the route's parameters so that the route can be accessible to a non-admin if they are updating their own info.

Bug#4: The update route for users should only be able to change {first_name, last_name, phone, email}. If user cannot be found, return a 404 err. If they try to change other fields (including non-existent ones), an error should be raised but fields such as admin can be changed.

Bug#5: The delete route for users gave the successful result regardless of whether the user exists or not because we did not have 'await' before User.delete()

Bug#6: The /users/:username GET route does not give raise an error for the user but instead just returns an empty object.
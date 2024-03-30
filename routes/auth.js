/** Auth-related routes. */

const User = require('../models/user');
const express = require('express');
const router = express.Router();
const createTokenForUser = require('../helpers/createToken');
const { use } = require('bcrypt/promises');


/** Register user; return token.
 *
 *  Accepts {username, first_name, last_name, email, phone, password}.
 *
 *  Returns {token: jwt-token-string}.
 * added admin to the request body to account for users that are admins.
 * Otherwise, the default "false" boolean will set as the admin status for the user.
 * Added keyword 'await' in front of User.authenticate() because user was a pending promise instead of the intended user object.
 */

router.post('/register', async function(req, res, next) {
  try {
    const { username, password, first_name, last_name, email, phone, admin } = req.body;
    let user = await User.register({username, password, first_name, last_name, email, phone, admin});
    const token = createTokenForUser(user.username, user.admin);
    return res.status(201).json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

/** Log in user; return token.
 *
 *  Accepts {username, password}.
 *
 *  Returns {token: jwt-token-string}.
 *
 *  If incorrect username/password given, should raise 401.
 *
 */

router.post('/login', async function(req, res, next) {
  try {
    const { username, password } = req.body;
    let user = await User.authenticate(username, password);
    console.log(`login route:`, {user})
    console.log(user.admin)
    const token = createTokenForUser(username, user.admin);
    console.log(token)
    return res.json({ token });
  } catch (err) {
    return next(err);
  }
}); // end

module.exports = router;

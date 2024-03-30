const jwt = require("jsonwebtoken");
const { SECRET_KEY } = require("../config");


/** return signed JWT for payload {username, admin}. 
 * removed admin=false from the parameters.
 * called console.assert() for username and admin properties of the user object.
*/

function createToken(username, admin) {
  console.assert(username !== undefined, "createToken passed user without username property");
  console.assert(admin !== undefined, "createToken passed user without admin property");

  console.log("Username:", username);
  console.log("Admin:", admin);

  let payload = {
    username: username,
    admin: admin,
  };

  return jwt.sign(payload, SECRET_KEY);
}


module.exports = createToken;
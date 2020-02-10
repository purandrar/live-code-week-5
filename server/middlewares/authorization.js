const { User } = require("../models");
module.exports = function(req, res, next) {
  var user = jwt.verify(token, "shhhhh");
  User.findOne({
    where: {
      email: user.email,
      name: user.name
    }
  })
    .then(result => {
      req.user = user;
      next();
    })
    .catch(err => {
      console.log(err);
    });
};

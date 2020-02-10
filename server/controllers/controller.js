var jwt = require("jsonwebtoken");
const { User, Comic } = require("../models");
class Controller {
  static login(req, res, next) {
    User.findOne({
      where: {
        email: req.body.email,
        password: req.body.password
      }
    })
      .then(result => {
        var token = jwt.sign(
          { email: result.email, name: result.email },
          "shhhhh"
        );
        res.status(200).json({ access_token: token });
      })
      .catch(err => {
        res.status(404).json("email/password is wrong");
      });
  }
  static getComic(req, res, next) {
    console.log(123);
    Comic.findAll()
      .then(result => {
        res.status(200).json(result);
      })
      .catch(err => {
        console.log(err);
      });
  }
  static getOne(req, res, next) {
    Comic.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(result => {
        if (result) {
          res.status(200).json(result);
        }
      })
      .catch(err => {
        console.log(err);
      });
  }
  static updateOne(req, res, next) {
    let objInput = {
      title: req.body.title,
      author: req.body.author,
      imageURL: req.body.imageURL
    };
    Comic.update(objInput, {
      where: {
        id: req.params.id
      }
    }).then(result => {
      res.status(200).json({ objInput, message: "success update comic" });
    });
  }
  static register(req, res, next) {
    let objInput = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    };
    User.create(objInput)
      .then(result => {
        var token = jwt.sign(
          { email: result.email, name: result.email },
          "shhhhh"
        );
        res.status(200).json({ access_token: token });
      })
      .catch(err => {
        console.log(err);
      });
  }
}
module.exports = Controller;

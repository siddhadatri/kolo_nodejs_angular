const db = require("../models");
const Productdetails = db.productdetails;
const Oppp = db.Sequelize.Oppp;

exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Oppp.like]: `%${title}%` } } : null;
  
    Productdetails.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving orderd."
        });
      });
  };

  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Productdetails.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };
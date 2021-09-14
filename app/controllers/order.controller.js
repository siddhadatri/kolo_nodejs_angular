const db = require("../models");
const Order = db.orders;
const Opp = db.Sequelize.Opp;

// Create and Save a new Order
exports.create = (req, res) => {
    // Validate request
    // if (!req.body.title) {
    //   res.status(400).send({
    //     message: "Content can not be empty!"
    //   });
    //   return;
    // }
  
    // Create an Order
    const order = {
        name: req.body.name,
        surname: req.body.surname,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        payment: req.body.payment,
        delivery: req.body.delivery,
        city: req.body.city,
        department: req.body.department,
        notes: req.body.notes
    };
  
    // Save Order in the database
    Order.create(order)
    .then(data => {res.send(data);})
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Order."
      });
    });
  };
  
  // Retrieve all Order from the database.
  exports.findAll = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Opp.like]: `%${title}%` } } : null;
  
    Order.findAll({ where: condition })
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
  
  // Find a single Order with an id
  exports.findOne = (req, res) => {
    const id = req.params.id;
  
    Order.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Tutorial with id=" + id
        });
      });
  };
  
  // Delete a Order with the specified id in the request
  exports.delete = (req, res) => {
    const id = req.params.id;
  
    Order.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Order was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Order with id=${id}. Maybe Order was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Order with id=" + id
        });
      });
  };
  
  // Delete all Order from the database.
  exports.deleteAll = (req, res) => {
    Order.destroy({
      where: {},
      truncate: false
    })
      .then(nums => {
        res.send({ message: `${nums} Order were deleted successfully!` });
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while removing all Order."
        });
      });
  };
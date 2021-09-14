module.exports = (sequelize, Sequelize) => {
    const Order = sequelize.define("orders", {
        pillowId: {type: Sequelize.INTEGER},
        name: {type: Sequelize.STRING},
        surname: {type: Sequelize.STRING},
        phonenumber: {type: Sequelize.STRING},
        email: {type: Sequelize.STRING},
        payment: {type: Sequelize.STRING},
        delivery: {type: Sequelize.STRING},
        city: {type: Sequelize.STRING},
        department: {type: Sequelize.INTEGER},
        notes: {type: Sequelize.STRING},
    },{ // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,
    });
    return Order;
}
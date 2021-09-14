
module.exports = (sequelize, Sequelize) => {
    const Productdetails = sequelize.define("productdetails", {
        // id: {type: Sequelize.INTEGER},
        productId: {type: Sequelize.INTEGER},
        title: {type: Sequelize.STRING},
        price: {type: Sequelize.STRING},
        description: {type: Sequelize.STRING},
        // image: {type: Sequelize.STRING},
        src: {type: Sequelize.STRING},
        changeClick: {type: Sequelize.STRING}
    },{ // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,
    });
    return Productdetails;
}
module.exports = (sequelize, Sequelize) => {
    const Products = sequelize.define("products", {
        // id: {type: Sequelize.INTEGER},
        title: {type: Sequelize.STRING},
        img: {type: Sequelize.STRING}
        
        
    },{ // don't add the timestamp attributes (updatedAt, createdAt)
        timestamps: false,

        // If don't want createdAt
        createdAt: false,

        // If don't want updatedAt
        updatedAt: false,
    });
    return Products;
}

// module.exports = class Products {
//     id
//     title
//     img
//     constructor(title, img, id) {
//         this.id = id;
//         this.img = img;
//         this.title = title;
//     }
//     static getAll() {
//         return this.sequelise.getAll();
//     }
//     update() {
//         this.sequelise.insert({ title: this.title })
//     }
//     create() {}
// }
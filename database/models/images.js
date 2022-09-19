module.exports = function(sequelize, dataTypes){
    let alias = 'Image'
    let cols = {
        id : { 
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        product_id:{
            type: dataTypes.INTEGER,
            allowNull: false


        },
        url : { 
            type: dataTypes.STRING,
            allowNull: true,
        },
    }
    let config = {
        tableName : "color",
        timestamps: false
    }

    let Image = sequelize.define(alias, cols, config);

    // Image.associate = function(models){

    //     Image.hasOne(models.products , {
    //         as: "products",
    //         foreignKey : "product_id"
    //     })
        
    // }

    return Image;
}
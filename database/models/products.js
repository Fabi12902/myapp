module.exports = function(sequelize, dataTypes){
    let alias = 'Products'
    let cols = {
        id : { 
            type: dataTypes.INTEGER(50),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        name : { 
            type: dataTypes.STRING(50),
            allowNull: false,
        },
        brand_id : {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        material_id : {
            type: dataTypes.INTEGER(11),
            allowNull : false,
        },
        color_id : {
            type: dataTypes.INTEGER(11),
            allowNull : false,
        },
        price : {
            type: dataTypes.INTEGER(11),
            allowNull: false,
        },
        description: {
            type: dataTypes.STRING(50),
            allowNull:false
        }
    }
    let config = {
        tableName : "products",
        timestamps: false
    }

    let Products = sequelize.define(alias, cols, config);

    Products.associate = function(models){

        Products.hasOne(models.brand, {
            as: "brand",
            foreignKey : "brand_id"
        })

        Products.hasOne(models.material, {
            as: "material",
            foreignKey : "material_id"
        })

        Products.hasOne(models.color,{
            as:"color",
            foreignKey: "color_id"
        })
        
    }

    return Products;
}
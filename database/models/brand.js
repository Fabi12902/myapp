module.exports = function(sequelize, dataTypes){
    let alias = 'Brand'
    let cols = {
        id : { 
            type: dataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true 
        },
        name : { 
            type: dataTypes.STRING,
            allowNull: false,
        },
    }
    let config = {
        tableName : "brand",
        timestamps: false
    }

    let brand = sequelize.define(alias, cols, config);

    brand.associate = function(models){

        brand.belongsTo( 
            models.products, {
            as: "products",
            foreignKey: 'brand_id',
            timestamps: false
        }
            );
        
    }

    return brand;
}
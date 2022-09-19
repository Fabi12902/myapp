module.exports = function(sequelize, dataTypes){
    let alias = 'Material'
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
        tableName : "material",
        timestamps: false
    }

    let Material = sequelize.define(alias, cols, config);

    Material.associate = function(models){

        Material.belongsTo(models.products, {
            as: "products",
            foreignKey : "material_id"
        })
        
    }

    return Material;
}
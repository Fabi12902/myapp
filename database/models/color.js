module.exports = function(sequelize, dataTypes){
    let alias = 'Color'
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
        tableName : "color",
        timestamps: false
    }

    let Color = sequelize.define(alias, cols, config);

    Color.associate = function(models){

        Color.belongsTo(models.products , {
            as: "products",
            foreignKey : "color_id"
        })
        
    }

    return Color;
}
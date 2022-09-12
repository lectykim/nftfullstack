module.exports = (sequelize,DataTypes)=>{
    const Hashtag = sequelize.define('Hashtag',

{
    id:{
        type:DataTypes.INTEGER(100),
        primaryKey:true,
        autoIncrement:true,
    },
    title : {
        type:DataTypes.STRING(100),
        allowNull:false,
        unique:true,
    },
} , {
    sequelize,
    timestamps:true,
    underscored:false,
    modelName:'Hashtag',
    tableName:'hashtags',
    paranoid:false,
    charset:'utf8mb4',
    collate:'utf8mb4_general_ci',
    
}
);
Hashtag.associate = (db)=>{
    db.Hashtag.belongsToMany(db.Post,{through:'PostHashTag'});
};
return Hashtag;
}
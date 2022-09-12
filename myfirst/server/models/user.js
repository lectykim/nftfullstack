module.exports = (sequelize,DataTypes) =>{
    const User = sequelize.define('User', {
        id:{
            type: DataTypes.INTEGER(16),
            allowNull: false,
            primaryKey:true,
            autoIncrement:true,
            
        },
        email:{
            type:DataTypes.STRING(40),
            allowNull:false,
            unique:true,
        },
        nick:{
            type:DataTypes.STRING(15),
            allowNull:true,
        },
        password:{
            type: DataTypes.STRING(100),
            allowNull:false,
        },
        profile_picture:{
            type: DataTypes.STRING(100),
            allowNull: false,
            defaultValue: 'default_propic',
        },
        about_me:{
            type:DataTypes.STRING(200),
            allowNull:true,
        },
        provider:{
            type:DataTypes.STRING(10),
            allowNull:false,
            defaultValue:'local',
        },
        snsId : {
            type:DataTypes.STRING(30),
            allowNull:true,
        },
    
    
    },{
        sequelize,
        timestamps:true,
        underscored:false,
        modelName:"User",
        tableName:"users",
        paranoid:true,
        charset:'utf8mb4',
        collate:'utf8mb4_general_ci',
        
    });
    User.associate = (db)=>{
        db.User.hasMany(db.Post);
  
        db.User.belongsToMany(db.User,{
          foreignKey:'subscribingId',
          as:'Subscribers',
          through:'Subscribe',
        });
        db.User.belongsToMany(db.User,{
          foreignKey:'subscriberId',
          as:'Subscribings',
          through:'Subscribe',
        });
    };
    return User;
}
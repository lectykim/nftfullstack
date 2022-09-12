 





    

module.exports = (sequelize,DataTypes)=>{
    const Post = sequelize.define('Post',
  
    {
      id:{
          type: DataTypes.INTEGER(15),
          primaryKey:true,
          allowNull:false,
          autoIncrement:true,
      },
      maker:{
          type:DataTypes.STRING(40),
          allowNull:false,
      },
      
      owner:{
          type:DataTypes.STRING(40),
          allowNull:false,
      },
  
      
      title:{
          type:DataTypes.STRING(40),
          allowNull:false,
      },
  
      
      contents_nft:{
          type:DataTypes.STRING(200),
          allowNull:false,
      },
      
      
      about_nft:{
          type:DataTypes.STRING(200),
          allowNull:false,
      },
  
      
      price:{
          type:DataTypes.INTEGER(100),
          allowNull:false,
      },
  
  },{
      sequelize,
      timestamps:true,
      underscored:false,
      modelName:"Post",
      tableName:"posts",
      paranoid:false,
      charset:'utf8mb4',
      collate:'utf8mb4_general_ci',
      
  });
  Post.associate = (db)=>{
    db.Post.belongsTo(db.User);
    db.Post.belongsToMany(db.Hashtag,{through:'PostHashTag'});
  };
  return Post;
}
module.exports = (sequelize, Sequelize) => {
    const Catalogue = sequelize.define("catalogue", {
  
      titre: {
        type: Sequelize.STRING,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING,
        allowNull : false
      },    
      prix: {
          type: Sequelize.NUMBER,
      },
      qte: {
        type: Sequelize.NUMBER,
    },
      image: {
          type: Sequelize.STRING,
      },
      
   });
  return Catalogue;
  };
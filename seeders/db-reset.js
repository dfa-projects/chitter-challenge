const db = require('../models');

const truncateTables = () => {
    console.log('truncating tables');
    db.User.destroy({ truncate : true, cascade: true });
    db.Peeps.destroy({ truncate: true, cascade: true });

  }
  
  module.exports = truncateTables;
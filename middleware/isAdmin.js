const isAdmin = (req, res, next) => {
    if (req.session && req.session.role === 'admin') {
      next(); 
    } else {
      res.status(403).json({ message: 'just admin kan göra det' }); 
    }
  };
  
  module.exports = isAdmin;
  
const handleErrors = (err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Det går inte');
  };
  
  module.exports = {
    handleErrors,
  };
  
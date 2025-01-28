const cors = require('cors');

const configureCORS = () => {
  const corsOptions = {
    origin: ['http://localhost:5173'], // Allow specific origins
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
  };
  return cors(corsOptions);
};

module.exports = configureCORS;

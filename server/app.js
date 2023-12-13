const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(bodyParser.json());
const allowedOrigins = ['*'];
app.use(cors({
  origin: function(origin, callback){
    if (!origin) {
      return callback(null, true);
    }

    if (allowedOrigins.includes(origin)) {
      const msg = 'The CORS policy for this site does not allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }
    return callback(null, true);
  }

}));
// Import routes
const clientRoutes =  require('./routes/clientRoutes');
app.use('/client',clientRoutes);
const addClientRoutes =  require('./routes/clientRoutes');
app.use('/client/addBooks',addClientRoutes);  
const updateClientRoutes =  require('./routes/clientRoutes');
app.use('/client/updateBooks',updateClientRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

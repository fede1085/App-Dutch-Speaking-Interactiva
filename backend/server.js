const express = require('express');
const cors = require('cors');
const speechRoutes = require('./routes/speech');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/speech', speechRoutes);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));

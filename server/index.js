const app = require('./app');
const db = require('./models/index.js');
const PORT = 3001;

db.connectDB('neighbourlydb').then(console.log('Connected to Mongoose'));

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/ 🚀`);
});

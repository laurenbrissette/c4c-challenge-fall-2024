import express from 'express';

const app = express();
const port = 4000;

// Some partner data
const bkt = {
  name : "bkt",
  localId : "1",
};
const there = {
  name : "there",
  localId : "2",
}

const partners = [bkt, there];

/* 
  APPLICATION MIDDLEWARE
  This section contains some server configuration.
  You will likely not need to change anything here to meet the requirements.
  (but you are welcome to, if you'd like)
*/

// Parse request bodies as JSON
app.use(express.json())
// Enable CORS for the frontend so it can call the backend
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS")
  next();
})

/*
  APPLICATION ROUTES
*/

app.get('/', (req, res) => {
  res.status(200).send(partners);
})

// Start the backend
app.listen(port, () => {
  console.log(`Express server starting on port ${port}!`);
})
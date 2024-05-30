import express from 'express';

const app = express();
const port = 4000;

// Some partner data
const partners = {
  "bkt": {
    "thumbnailUrl": "	https://static.wixstatic.com/media/1193ef_371853f9…_0.01,enc_auto/Breaktime%20Logo%20Comfortaa-2.jpg",
    "name": "Breaktime",
    "description": "eventually i will fill this with specific information",
  },
  "tswgo": {
    "thumbnailUrl": "	https://images.squarespace-cdn.com/content/v1/5afe…NHSLS67AF1SRNW6JAX4/LOGO_TSWGO_1.png?format=1500w",
    "name": "This Star Won't Go Out",
    "description": "eventually i will fill this with specific information",
  },
  "jpal": {
    "thumbnailUrl": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/JPAL_logo.svg",
    "name": "J-PAL",
    "description": "eventually i will fill this with specific information",
  },
  "llbpn": {
    "thumbnailUrl": "	https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_2019_rgb.png",
    "name": "Lucy's Love Bus - Practitioner Network",
    "description": "eventually i will fill this with specific information",
  },
  "llbsc": {
    "thumbnailUrl": "	https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_2019_rgb.png",
    "name": "Lucy's Love Bus - Sajini Center",
    "description": "eventually i will fill this with specific information",
  },
  "sftt": {
    "thumbnailUrl": "https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png",
    "name": "Speak For The Trees",
    "description": "Speak for the Trees Boston aims to improve the size and health of the urban forest " 
      + "in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They "
      + "work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. "
      + "C4C has built a tree stewardship application for SFTT that allows users to participate in conserving "
      + "Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for.",
  },
  "coc": {
    "thumbnailUrl": "	https://www.cambridgema.gov/~/media/Images/sharedimages/cityseal/cityseal?mw=1920",
    "name": "City of Cambridge",
    "description": "eventually i will fill this with specific information",
  }
}

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
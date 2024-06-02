import express from 'express';

const app = express();
const port = 4000;

// Some partner data
var bkt = new Partner("https://static.wixstatic.com/media/1193ef_371853f9…_0.01,enc_auto/Breaktime%20Logo%20Comfortaa-2.jpg", 
"Breaktime", "Breaktime’s mission is to break the cycle of homelessness by equipping young adults with "
+ "the job and financial security they need to establish housing security. A key part of the program is "
+ "by providing meaningful employment. We are assisting Breaktime in building a bespoke system for their "
+ "unique needs.");

var tswgo = new Partner("https://images.squarespace-cdn.com/content/v1/5afe…NHSLS67AF1SRNW6JAX4/LOGO_TSWGO_1.png?format=1500w",
"This Star Won't Go Out", "Since its founding in 2011, TSWGO has helped hundreds of families, "
+ "with gifts totaling over $450,000 to help families suffering from financial hardship related "
+ "to childhood cancer. We're helping to streamline this system so that TSWGO can focus their attention "
+ "on helping families.");

var jpal = new Partner("https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/JPAL_logo.svg",
"J-PAL", "The Abdul Latif Jameel Poverty Action Lab (J-PAL) is a global research center working "
+ "to reduce poverty by ensuring that policy is informed by scientific evidence. J-PAL works with the "
+ "New York City Department of Youth and Community Development, which runs the country's largest summer "
+ "youth employment program, to evaluate the impact of recommendation letters on participants’ educational "
+ "and employment outcomes after the program. C4C is building a system that simplifies the creation, "
+ "dissemination and completion of surveys that will be used to create unique letters of recommendation "
+ "for each youth. Each youth will be sent their unique letter(s) of recommendation, which we hope will "
+ "improve their educational and employment opportunities.");

var llbpn = new Partner("https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_2019_rgb.png",
"Lucy's Love Bus - Practitioner Network", "Lucy’s Love Bus improves quality of life for children "
+ "with cancer or other life-threatening illnesses with integrative therapies like massage, meditation, "
+ "acupuncture, music therapy, and therapeutic horseback riding. Integrative therapies ease children’s "
+ "pain and anxiety during and after traditional medical treatments. We are building an open search "
+ "directory to allow families across New England to find integrative therapists in their area.");

var llbsc = new Partner("https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/LLB_2019_rgb.png",
"Lucy's Love Bus - Sajini Center", "The Sajni Center is a space of hope and healing for children "
+ "with life-threatening illness or chronic medical conditions and their families. Here they host "
+ "events for the children and their families. We created the event planning and ticket purchasing "
+ "system for all the events hosted by Lucy's Love Bus.");

var sftt = new Partner("https://c4cneu-public.s3.us-east-2.amazonaws.com/Site/sfft-project-page.png",
"Speak For The Trees",
"Speak for the Trees Boston aims to improve the size and health of the urban forest " 
      + "in the greater Boston area, with a focus on under-served and under-canopied neighborhoods. They "
      + "work with volunteers to inventory (collect data) trees, plant trees, and educate those about trees. "
      + "C4C has built a tree stewardship application for SFTT that allows users to participate in conserving "
      + "Boston's urban forest. Across Boston, hundreds of trees have been adopted and cared for."
);

var coc = new Partner("https://www.cambridgema.gov/~/media/Images/sharedimages/cityseal/cityseal?mw=1920",
"City of Cambridge","After the success of the Speak for the Trees project, the City of Cambridge reached "
+ "out for a similar project. We are developing an interactive tree map for all of Cambridge, empowering "
+ "citizens to become steward of Cambridge's mighty urban forest.");

var partners = [bkt, tswgo, jpal, llbpn, llbsc, sftt, coc];


function Partner(thumbnailUrl, name, description) {
  this.thumbnailUrl = thumbnailUrl;
  this.name = name;
  this.description = description;

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
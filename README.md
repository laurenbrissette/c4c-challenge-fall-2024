## Prerequisites

If you don't have them already, you'll need to install Node.js/NPM and Git:
- Node.js + NPM - install [here](https://nodejs.org/en/download/package-manager) (we highly recommend using at least Node 18.0.0 + NPM 8.6.0)
   - You can choose to install via the command line under "Package Manager", or download an installer under "Prebuilt Installer"
   - Node and NPM are installed together
- Git - install [here](https://git-scm.com/downloads)

Other additions I made to this project:
- Added Bootstrap for React
- Linked Google Fonts 

## Setup Instructions

1. Clone this repo on to your computer. You can do so with the [desktop app](https://desktop.github.com/), or in a terminal with the following:

git clone https://github.com/laurenbrissette/c4c-challenge-fall-2024

2. In a terminal, run `npm install` **at the root of this project** to install the required packages
3. Run `npm run dev` **at the root of this project** to start the app locally
4. Visit `http://localhost:3000` to view the website
    
    4a. The backend will be available at `http://localhost:4000`

** Note: I highly recommend viewing `http://localhost:3000` on **Google Chrome**.  When viewing on Safari, the add and delete functions haven't consistently worked.  (I've had this issue with other projects on  Safari, so it might be my version! I have an older laptop.).

## Overview 
In this project, I developed a web application for viewing, adding, and deleting cards with details about Code4Community projects.  Each card is displayed with a title, description, thumbnail, and activity status.  

For the frontend, I used React, with Modal and Form elements from Bootstrap for React.

For the backend, I used Express.js.  The server is initialized with partner data from the current Code4Community website, which can then be modified through adding and deleting on-site.

# Design Decisions
Initially, I considered filtering the information the user provided: perhaps not allowing a name to be reused, or requiring that all elements (name, description, and thumbnail) be present in order for a card to be created.  However, I decided that since this site is intended for internal purposes, it would be frustrating to put all these constraints on ourselves.  What if we have a project like Speak for The Trees get restarted, and we want to create a separate instance of it on the site?  What if the group we're working with doesn't have a logo to display?

I also made an effort to keep this project __clean__ both in the design of the site and in the organization of my files.  I made a pop up for the 'new project' form, and made the descriptions scrollable to try to minimize crowding on the page.  Throughout the project when I found myself coding too much in App.jsx or even in Dashboad.jsx, I moved functions around to make their locations more intuitive, hence adding the separate CreateNewProject.jsx file.

# Reflection 
I learned an unbelieveable amount from this project.  Two weeks ago, I had hardly coded 20 lines in JavaScript.  Simple CSS and HTML was the bulk of my web development experience.  I am so excited to have built a true web application!

If I could go back two weeks, I would have told myself to spend even more time understanding how JSON data is passed, and how the backend and frontend interact.  Understanding what cors and no-cors meant, that JSON data is a formatted String not an object with String properties, the importance of headers like "Content-Type: application/json", and so many more things that sound silly now.  

I learned something new every other step of this project.  I read articles, I watched YouTube videos, and I searched targeted questions.  I grew a lot through the process of trial and error, but even moreso by reading to understand the technology I was using and how to manipulate it.

If I had more time, my next step would be to add an initial authentication screen to access the webpage.  I also would have liked to add some more UX elements, like a warning pop up before deleting a tile and a confirmation message after creating a new one.  

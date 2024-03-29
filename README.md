# <img src="./frontend/src/imgs/alien.svg" alt="Alien" width="40"/> &ensp;UFO Sightings 

This project contains reports about several UFO (Unidentified Flying Object) sightings over the years. 
Click on a marker within the map to find out more about an UFO sighting (Date/Time, Location, Duration, Shape and Comments) or click on a cluster to view all sightings in that region (The number on a cluster indicates how many markers it contains).

<img src="./assets/Screenshot1.png" alt="UFO Sightings Application"/>

Dataset retrieved from [Sigmond Axel](https://www.kaggle.com/datasets/NUFORC/ufo-sightings).

## Requirements
* Node
* NPM
* Docker
* Docker Compose

## Technologies
#### Backend
* Language: Python
* Framework: FastAPI
#### Frontend
* Language: TypeScript
* Framework: React

## Installation

Clone the Project:

    git@github.com:LucasGlopes/UFOSightings.git  
    
 Navigate to the project folder:
    
#### Backend
    cd backend/
    docker-compose up --build
    
#### Frontend
    cd frontend/
    npm install
    npm start

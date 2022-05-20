from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from app.utils import sighting_to_dict

import pandas as pd


def get_application():
    app = FastAPI()

    app.add_middleware(
        CORSMiddleware,
        allow_origins=["*"],
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

    return app

app = get_application()


@app.get("/")
async def root():
    return {"message": "Ok!"}

@app.get("/sightings")
async def get_all_sightings():

    sightings = pd.read_csv('./app/data/ufoData.csv', usecols=["latitude","longitude "], keep_default_na=False).values.tolist()

    # def myfunc(sighting):
    #     return [float(sighting[0]), sighting[1]]

    # sightings = list(map(myfunc, sightings))

    if sightings:
        return sightings
    raise HTTPException(404, "Something went wrong!")


@app.get("/sightings{position}")
async def get_sighting(position):
    sightings = pd.read_csv('./app/data/ufoData.csv', keep_default_na=False).values.tolist()

    sighting = sightings[int(position)]

    if sighting:
        return sighting_to_dict(sighting)
    raise HTTPException(404, "Something went wrong!")



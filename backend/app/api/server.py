import re
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

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
    {"message": "Ok!"}

@app.get("/sightings")
async def get_all_sightings():

    sightings = pd.read_csv('./app/data/ufoData.csv', usecols=["latitude","longitude "], keep_default_na=False)

    return sightings.values.tolist()

# @app.post("/sighting")
# async def get_sighting():
#     return 1



from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

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

@app.get("/api/todo")
async def get_todo():
    return {"user": "lucas"}



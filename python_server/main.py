import uvicorn
from fastapi import FastAPI
from sqlalchemy import create_engine, pool

from app.controller import user_controller

app = FastAPI()

DB_URI = "postgresql://root:root@localhost/postgres"
engine = create_engine(DB_URI, poolclass=pool.SingletonThreadPool)

app.include_router(user_controller.app, prefix="/api/v1/users")


@app.on_event("startup")
async def startup():
    engine.connect()


@app.on_event("shutdown")
async def shutdown():
    engine.disconnect()


if __name__ == '__main__':
    uvicorn.run("main:app", host="localhost", port=5000, reload=True)

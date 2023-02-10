from fastapi import APIRouter, Request
from sqlalchemy.orm import Session
from ..service import user_service

app = APIRouter()


@app.post("/")
def create(request: Request):
    user_service.create_user(db=Session, user=request.body())
    return {"message": "Hello World"}


@app.delete("/{id}")
def delete(request: Request):
    user_service.delete_user(db=Session, user_id=id)
    return {"Message": "User has been deleted."}


@app.get("/")
def show_all():
    return user_service.get_all_users(db=Session)


@app.get("/{id}")
def show():
    return user_service.get_user(user_id=id, db=Session)

from fastapi import APIRouter, Request
from sqlalchemy.orm import Session
from ..service import user_service
from ..dto import user_dto
app = APIRouter()


@app.post("/")
def create(user: user_dto.UserCreate):
    # user_service.create_user(db=Session, user=request.body())
    return user.name


@app.delete("/{id}")
def delete(request: Request):
    user_service.delete_user(db=Session, user_id=id)
    return {"Message": "User has been deleted."}


@app.put("/{id}")
def update(request: Request):
    updated_user = request.body()
    return user_service.update_user(db=Session, user_id=id, user_update=updated_user)


@app.get("/")
def show_all():
    return user_service.get_all_users(db=Session)


@app.get("/{id}")
def show():
    return user_service.get_user(user_id=id, db=Session)

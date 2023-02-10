from pydantic import BaseModel


class UserIn(BaseModel):
    name: str
    email: str


class UserOut(UserIn):
    id: int


class UserCreate(BaseModel):
    name: str
    email: str


class UserUpdate(BaseModel):
    name: str
    email: str


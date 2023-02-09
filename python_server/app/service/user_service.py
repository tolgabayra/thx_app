from typing import List
from ..models import User
from sqlalchemy.orm import Session


def create_user(db: Session, user: User):
    user = User(**user.dict())
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def get_all_users() -> List[User]:
    # Code to fetch all users from database
    return


def get_user(user_id: int) -> User:
    # Code to fetch a single user from database
    return

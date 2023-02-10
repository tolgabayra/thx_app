import sys
from typing import List
from ..models import User
from sqlalchemy.orm import Session
from main import engine
sys.path.append("../../main.py")


def create_user(db: Session, user: User):
    db.add(user)
    db.commit()
    db.refresh(user)
    return user


def get_all_users(db: Session) -> List[User]:
    return db.query(User).all()


def get_user(user_id: int, db: Session) -> User:
    return db.query(User).filter(User.id == user_id).first()


def delete_user(db: Session, user_id: int):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        return None
    db.delete(user)
    db.commit()
    return user


def update_user(db: Session, user_id: int, user_update: User):
    user = db.query(User).filter(User.id == user_id).first()
    if not user:
        return None
    update_data = user_update.dict(exclude_unset=True)
    for field, value in update_data.items():
        setattr(user, field, value)
    db.add(user)
    db.commit()
    db.refresh(user)
    return user

from fastapi import APIRouter

app = APIRouter()


@app.get("/users")
def get_users():
    return {"message": "Hello World"}

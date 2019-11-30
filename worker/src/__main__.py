import uvicorn
from .app import make_app


if __name__ == "__main__":
    app = make_app()
    uvicorn.run(app, host="0.0.0.0", port="80", log_level="debug")


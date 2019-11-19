import uvicorn
import os
from starlette.applications import Starlette
from starlette.middleware.cors import CORSMiddleware
from strawberry.asgi import GraphQL
from .server import schema

def main(host, port=80):
    app = Starlette(debug=True)

    app.add_middleware(
        CORSMiddleware, allow_headers=["*"], allow_origins=["*"], allow_methods=["*"]
    )

    graphql_app = GraphQL(schema, debug=True)

    app.add_route("/graphql", graphql_app)
    app.add_websocket_route("/graphql", graphql_app)

    print(f"Running strawberry on http://{host}:{port}/graphql 🍓")

    uvicorn.run(app, host=host, port=port, log_level="debug")


if __name__ == '__main__':
    main('0.0.0.0', int(os.getenv('PORT')) or 8000)
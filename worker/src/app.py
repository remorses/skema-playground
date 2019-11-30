import uvicorn
import os
from starlette.applications import Starlette
from starlette.requests import Request
from starlette.middleware.cors import CORSMiddleware
from starlette.middleware.base import BaseHTTPMiddleware
from strawberry.asgi import GraphQL
from .server import schema


def make_app(BASE):
    class CatchAll(BaseHTTPMiddleware):
        async def dispatch(self, request: Request, handler):
            request.scope["path"] = BASE  # TODO subscriptions path
            return await handler(request)

    app = Starlette(debug=True)

    app.add_middleware(
        CORSMiddleware, allow_headers=["*"], allow_origins=["*"], allow_methods=["*"]
    )

    graphql_app = GraphQL(schema, debug=True)

    app.add_route(BASE, graphql_app)
    app.add_websocket_route(BASE, graphql_app)
    app = CatchAll(app)
    return app

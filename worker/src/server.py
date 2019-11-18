import strawberry
from time import sleep
from enum import Enum
from functools import lru_cache
from skema.cli import Gen
from typing import *
import json


Json = strawberry.scalar(
    NewType("Json", Any), serialize=lambda x: x, parse_value=lambda x: x
)


@strawberry.enum
class LanguageName(Enum):
    python = "python"
    typescript = "typescript"
    jsonschema = "jsonschema"
    graphql = "grphql"


gen = Gen()


def get_schema(language):
    func = getattr(Gen, language)
    if not func:
        raise Exception(f"lang {language} not found")
    skema: str = func.__doc__
    skema = skema.strip()
    if not skema:
        return {}
    return json.loads(gen.jsonschema(skema=skema, resolve=True))


LANGUAGES = {
    LanguageName.graphql: get_schema("graphql"),
    LanguageName.python: get_schema("python"),
    LanguageName.typescript: get_schema("typescript"),
    LanguageName.jsonschema: get_schema("jsonschema"),
}

# print(LANGUAGES)


@strawberry.type
class OutputCode:
    code: str


@strawberry.type
class Language:
    name: LanguageName
    optionsSchema: Json


@strawberry.type
class Query:
    @strawberry.field
    # @lru_cache(200)
    def languages(self, info) -> List[Language]:
        # sleep(1)
        return [
            Language(name=name, optionsSchema=opts) for name, opts in LANGUAGES.items()
        ]


@strawberry.type
class Mutation:
    @strawberry.mutation
    def getOutput(
        self, info, skema: str, language: LanguageName, options: Json
    ) -> OutputCode:
        func = getattr(gen, language.name)
        code = func(skema=skema, **options)
        return OutputCode(code=code)


schema = strawberry.Schema(query=Query, mutation=Mutation)


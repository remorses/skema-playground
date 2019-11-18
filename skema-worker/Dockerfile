FROM python:3.7.4-alpine

RUN apk add --no-cache build-base

WORKDIR /workdir

COPY requirements.txt /workdir/

RUN pip install -r requirements.txt

COPY . /workdir

CMD python -m src


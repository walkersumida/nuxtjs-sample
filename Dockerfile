FROM node:12.22.10

# install dependency package
RUN apt-get update \
 && apt-get install -y \
    libssl-dev \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

WORKDIR /app

ENV HOST 0.0.0.0

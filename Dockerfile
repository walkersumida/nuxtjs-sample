FROM node:10.15.3

RUN echo "deb http://deb.debian.org/debian jessie main" > /etc/apt/sources.list \
 && echo "deb http://security.debian.org jessie/updates main" >> /etc/apt/sources.list

# install dependency package
RUN apt-get update \
 && apt-get install -y \
    libssl-dev \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# update yarn
RUN npm install -g yarn@1.15.2

WORKDIR /app

ENV HOST 0.0.0.0

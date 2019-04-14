FROM node:10.15.3

RUN echo "deb http://deb.debian.org/debian jessie main" > /etc/apt/sources.list \
 && echo "deb http://security.debian.org jessie/updates main" >> /etc/apt/sources.list

# install dependency package
RUN apt-get update \
 && apt-get install -y \
    apt-transport-https \
    libssl-dev \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

# install yarn
# https://yarnpkg.com/en/docs/install#linux-tab
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
 && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
 && apt-get update \
 && apt-get install -y \
    yarn \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN yarn add -D @nuxt/typescript
RUN yarn add ts-node

WORKDIR /app

ENV HOST 0.0.0.0

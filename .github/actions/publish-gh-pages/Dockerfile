FROM ubuntu:bionic

LABEL "name"="Publish App"
LABEL "maintainer"="Donovan van der Linde"
LABEL "version"="0.0.1"

LABEL "com.github.actions.name"="Publish App"
LABEL "com.github.actions.description"="Publish App via gh-pages"
LABEL "com.github.actions.icon"="package"
LABEL "com.github.actions.color"="green"

RUN apt-get update > /dev/null && apt-get -yqq install curl git > /dev/null

RUN curl -sSL \
    https://github.com/gohugoio/hugo/releases/download/v0.56.3/hugo_0.56.3_Linux-64bit.tar.gz | \
    tar xzf - hugo && \
    chmod +x /hugo && \
    /hugo version

COPY entrypoint.sh /entrypoint.sh
RUN chmod +x entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
FROM node:current-alpine3.15

RUN apk add --no-cache \
    bash bash-completion supervisor \
    autoconf automake build-base libtool nasm

# Environments
ARG TARGET_UID
ARG TARGET_GID
ARG AUTO_UPDATE
ARG WEBSITE_NAME
ARG TEMPLATE
ARG RUN_MODE

# Create Docusaurus directory and change working directory to that
RUN mkdir /docusaurus
WORKDIR /docusaurus

# Copy configuration files
ADD config/init.sh /
ADD config/auto_update_crontab.txt /
ADD config/auto_update_job.sh /
ADD config/run.sh /
COPY config/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Set files permission
RUN chmod a+x /init.sh /auto_update_job.sh /run.sh

EXPOSE 80
VOLUME [ "/docusaurus" ]
ENTRYPOINT [ "/init.sh" ]


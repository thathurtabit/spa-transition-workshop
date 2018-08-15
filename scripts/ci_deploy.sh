#!/bin/sh

scp -i ~/.ssh/id_rsa archive.tgz $DEPLOY_USER@$DEPLOY_HOST:/var/www/$PROJECT_NAME
scp -i ~/.ssh/id_rsa scripts/server/nginx.$DEPLOY_ENV.conf $DEPLOY_USER@$DEPLOY_HOST:/etc/nginx/conf.d/$PROJECT_NAME.nginx.conf
ssh $DEPLOY_USER@$DEPLOY_HOST 'mkdir -p /var/www/'"$PROJECT_NAME"' && tar -zxmf /var/www/'"$PROJECT_NAME"'/archive.tgz -C /var/www/'"$PROJECT_NAME"' && rm /var/www/'"$PROJECT_NAME"'/archive.tgz'

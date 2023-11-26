#!/bin/bash
source ~/.bashrc 
echo "Deploying back end"
git remote set-url heroku https://git.heroku.com/flex-forms-api.git
heroku buildpacks:clear
git subtree push --prefix back-end heroku master
heroku ps:scale web=1
cat back-end/.env.production | xargs heroku config:set
echo "Deploying front end"
git remote set-url heroku https://git.heroku.com/flex-forms.git
heroku buildpacks:clear
cat front-end/.env.production | xargs heroku config:set
git subtree push --prefix front-end heroku master
echo "Completed deployment"
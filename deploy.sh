#!/bin/bash
source ~/.bashrc 
echo "Deploying back end"
git remote set-url heroku https://git.heroku.com/aqueous-journey-08635.git
heroku buildpacks:clear
git subtree push --prefix back-end heroku master
heroku ps:scale web=1
cat back-end/.env | xargs heroku config:set
echo "Deploying front end"
git remote set-url heroku https://git.heroku.com/flexforms-frontend.git
heroku buildpacks:clear
git subtree push --prefix front-end heroku master
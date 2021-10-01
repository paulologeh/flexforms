Flex-Forms

# Deployment

## Back-end

```
git remote set-url heroku https://git.heroku.com/aqueous-journey-08635.git
heroku buildpacks:clear
heroku buildpacks:add heroku/python
heroku buildpacks
git subtree push --prefix back-end heroku master
heroku ps:scale web=1
cat back-end/.env | xargs heroku config:set
```

## Front-end

```
git remote set-url heroku https://git.heroku.com/flexforms-frontend.git
git subtree push --prefix front-end heroku master
```

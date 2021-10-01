Flex-Forms

# Deployment

## Back-end

```
heroku buildpacks:clear
heroku buildpacks:add heroku/python
heroku buildpacks
git subtree push --prefix back-end heroku master
heroku ps:scale web=1
cat back-end/.env | xargs heroku config:set
```

## Front-end

git subtree push --prefix front-end heroku master

## Client Installer

```
$ git init
$ git remote add origin https://github.com/AzumoHQ/wbenc
$ git clone https://github.com/AzumoHQ/wbenc
$ cd wbenc/client

# Install dependencies

$ npm install

# Force to install react-navigation version ^1.0.0-beta.21
# Note: this version remove the error message "TypeError: undefined is not a function (near '...addListener...')"

$ npm install react-navigation@1.0.0-beta.21

# Open Simulator with "IPad Pro 9.7inch (IOS 11.x)". When is opened then run project

$yarn run ios

```

## Server Deployment

### Running local

```
cd ./server
pm2 start ecosystem.config.js
``` 

### Remote deployment

```
cd ./server
pm2 deploy ecosystem.config.js <dev|staging|production>
```

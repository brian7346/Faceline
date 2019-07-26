# Faceline
> Social network

This is a MERN stack application. It is a small social network app that includes authentication, profiles and forum posts.

## Quick Start

```
# delte keys.js file in config folder

# rename the file keys_prod.js to keys.js

# this file is located in config/keys.json

# add uri of your mongodb connection for example

 "mongoURI": "mongodb://localhost/dev-social",
# add secretOrKey, for example

 secretOrKey: "secret"
 ```

```
# Install server dependencies
npm install

# Install client dependencies
cd client
npm install

# Run both Express & React from root
npm run dev

# Build for production
cd client
npm run build
```

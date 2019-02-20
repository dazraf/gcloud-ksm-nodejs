# How to run this

1. Download your service account json file to a location. For this document we'll refer to it as `<json-file-path>`

2. Make sure you have NodeJS and NPM installed. I'm using v11.10.0 and 6.7.0 respectively.

3. In a command line install dependencies:

```
npm install 
```

4. setup the environment variable required by the google library to point to `<json-file-path>`. If you read the docs, you can also hard code this.

```
export GOOGLE_APPLICATION_CREDENTIALS=<json-file-path>
```

5. Run the app
```
node app.js
```


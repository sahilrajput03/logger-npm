# README

**Why?**

- Middleware has coloured output as compared to using morgan's log printing for the requests.
- Simple coloured logs with different levels with matching color schemes i.e., logs related to info, warn and error.
- Prints the line number of the source log instruction as well.

Usage:

```js
# INSTALL
npm i sahilrajput03-logger

# FOR GENERAL LOGGING
const {loggert, logger} = require('sahilrajput03-logger')
const data = {friend: 'mercedes'}  // can be anything
logger.warn(data)
logger.info(data)
logger.err(data)

# FOR MIDDLEWARE
const {logMw} = require('@sahil/logger')
app.use(logMw)
```

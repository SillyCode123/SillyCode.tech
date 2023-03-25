'use strict';

const port = 2425;
const app = require('./src/server');

app.listen(port, () => console.log('Local app listening on port ' + port + "!"));

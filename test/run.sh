#!/bin/bash
browserify app.js -o bundle.js
python -m SimpleHTTPServer
#chromium-browser --incognito index.html

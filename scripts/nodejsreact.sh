#!/bin/bash
# nodejsreact.sh

projet_name=$1
# option2=$2
# option3=$3
dir="$(pwd)/$projet_name"

if [ -z $projet_name ]; then
    echo "Il faut un nom de projet :D"
    exit
fi
if [[ ! -d "$dir" ]]; then
    mkdir $dir
    cd $dir
    npx create-react-app frontend
    mkdir backend
    cd "$dir/backend"
    yarn init -y
    yarn add express body-parser cors
    echo 'const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const port = 4000;

// const routeProduct = require("./routes/product");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "frontend/public")));

// app.use("/product", routeProduct);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
    ' > server.js
    cd "$dir/frontend"
    contents="$(jq '.proxy = "http://localhost:4000"' package.json)" && \
    echo "${contents}" > package.json
    cd $dir
    yarn init -y
    main="$(jq '.main = "backend/server.js"' package.json)" && \
    echo "${main}" > package.json
    startFront="$(jq '.scripts["start:front"] = "cd frontend && yarn start"' package.json)" && \
    echo "${startFront}" > package.json
    startBack="$(jq '.scripts["start:back"] = "cd backend && nodemon server.js"' package.json)" && \
    echo "${startBack}" > package.json
    install="$(jq '.scripts.install = "sh scripts/install.sh"' package.json)" && \
    echo "${install}" > package.json
    dev="$(jq '.scripts.dev = "concurrently -n back,front \"yarn start:back\" \"yarn start:front\""' package.json)" && \
    echo "${dev}" > package.json
    start="$(jq '.scripts.start = "cd backend & node server.js"' package.json)" && \
    echo "${start}" > package.json
    build="$(jq '.scripts.build = "cd frontend && yarn build"' package.json)" && \
    echo "${build}" > package.json
    mkdir "$dir/scripts"
    echo '#!/bin/bash

backend="$(pwd)/backend";
frontend="$(pwd)/frontend";

#Init des node_modules
cd $frontend && yarn;
    cd $backend && yarn;' > scripts/install.sh
    
    
    exit
else
    echo "EXISTE DEJA"
    exit
fi
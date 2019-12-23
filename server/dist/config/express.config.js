"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
// @ts-ignore
const cors = require("cors");
const path = require("path");
exports.expressConfig = () => {
    // @ts-ignore
    const app = express();
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    app.use('/assets', express.static(path.join(__dirname, '../../assets')));
    app.use(cors());
    return app;
};
//# sourceMappingURL=express.config.js.map
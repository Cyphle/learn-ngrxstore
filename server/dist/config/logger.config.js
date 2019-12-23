"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const { combine, timestamp, printf } = winston_1.format;
const myFormat = printf((info) => {
    return `${info.timestamp} -- ${info.level.toUpperCase()} - ${info.message}`;
});
exports.logger = winston_1.createLogger({
    level: 'info',
    format: combine(timestamp(), myFormat),
    transports: [
        new winston_1.transports.Console()
    ]
});
//# sourceMappingURL=logger.config.js.map
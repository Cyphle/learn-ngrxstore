"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const convict = require('convict');
exports.config = convict({
    ENV: {
        doc: 'The application environment.',
        format: ['prd', 'dev', 'test'],
        default: 'dev',
        env: 'ENV',
        arg: 'env'
    },
    PORT: {
        doc: 'Applicatoin port',
        format: 'Number',
        default: '3000',
        env: 'PORT',
        arg: 'port'
    },
    BASE_URL: {
        doc: 'Base URL',
        format: 'String',
        default: '/rest/v1'
    }
});
//# sourceMappingURL=application.config.js.map
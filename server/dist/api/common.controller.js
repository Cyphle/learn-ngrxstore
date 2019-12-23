"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.putAndPostRoute = method => (req, res) => {
    const requestBody = req.body;
    method(requestBody);
    res.status(204);
    res.send({});
};
exports.getRoute = data => (req, res) => {
    exports.delay(() => {
        res.status(200);
        res.set('Content-Type', 'application/json');
        res.send(data);
    });
};
exports.delay = operation => setTimeout(operation, 500);
//# sourceMappingURL=common.controller.js.map
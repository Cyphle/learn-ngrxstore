"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.store = (() => {
    const store = {};
    const read = (selector) => selector(store);
    const write = (reducer, action) => {
        reducer(store, action);
    };
    return {
        read,
        write
    };
})();
//# sourceMappingURL=store.mock.js.map
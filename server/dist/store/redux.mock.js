"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const store_mock_1 = require("./store.mock");
const reducer_mock_1 = require("./reducer.mock");
const select = (selector) => {
    return store_mock_1.store.read(selector);
};
const dispatch = (action) => {
    store_mock_1.store.write(reducer_mock_1.reducer, action);
};
exports.mockStore = (() => ({
    select,
    dispatch
}))();
//# sourceMappingURL=redux.mock.js.map
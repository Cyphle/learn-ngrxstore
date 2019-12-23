"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const action_types_mock_1 = require("./action-types.mock");
exports.reducer = (state, action) => {
    switch (action.type) {
        case action_types_mock_1.ActionTypes.MOCK_INIT_DATA:
            return state[action.payload.type] = action.payload.data;
        case action_types_mock_1.ActionTypes.MOCK_UPDATE_TITLE:
            return state.identity.title = action.payload;
        default:
            return state;
    }
};
//# sourceMappingURL=reducer.mock.js.map
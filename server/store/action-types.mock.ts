export const ActionTypes = {
  MOCK_INIT_DATA: '[Portfolio] Init mock data',
  MOCK_ADD_PROJECT: '[Portfolio] Add project',
  MOCK_UPDATE_TITLE: '[HomePage] Update title',
  MOCK_UPDATE_EXPERIENCE: '[HomePage] Update experience'
};

export interface MockAction {
  type: string;
  payload: any;
}

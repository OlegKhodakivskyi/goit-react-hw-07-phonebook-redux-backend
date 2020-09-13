const getLoading = (state) => state.contacts.loading;
const getFilter = (state) => state.filter;
const getAlert = (state) => state.contacts.alertSwitch;

const getFilteredContacts = (state) => {};

export default { getLoading, getFilter, getAlert, getFilteredContacts };

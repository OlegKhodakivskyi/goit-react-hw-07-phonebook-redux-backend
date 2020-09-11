import phoneBookActionsTypes from "./phoneBookActionTypes";

const addContact = (contacts) => ({
  type: phoneBookActionsTypes.ADD,
  payload: {
    contacts,
  },
});

const deleteContact = (id) => ({
  type: phoneBookActionsTypes.DEL,
  payload: {
    id,
  },
});

const filter = (filter) => {
  // console.log(filter);
  return {
    type: phoneBookActionsTypes.FILTER,
    payload: {
      filter,
    },
  };
};

const duplicate = () => ({
  type: phoneBookActionsTypes.DUPLICATE,
});

const addContactRequest = () => {
  return {
    type: phoneBookActionsTypes.ADD_CONTACT_REQUEST,
  };
};

const addContactSuccess = (contacts) => {
  // console.log(contacts);
  return {
    type: phoneBookActionsTypes.ADD_CONTACT_SUCCESS,
    payload: {
      ...contacts,
    },
  };
};

const addContactError = (error) => {
  return {
    type: phoneBookActionsTypes.ADD_CONTACT_ERROR,
    payload: { error },
  };
};

export default {
  addContact,
  deleteContact,
  filter,
  duplicate,
  addContactRequest,
  addContactSuccess,
  addContactError,
};

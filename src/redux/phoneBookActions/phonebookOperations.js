import axios from "axios";
import phoneBookActions from "./phoneBookActions";

const onAddContact = (contacts) => (dispatch) => {
  dispatch(phoneBookActions.addContactRequest());
  axios
    .post("http://localhost:2000/contacts", contacts)
    .then((response) => {
      // console.log(response.data.contacts);
      dispatch(phoneBookActions.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(phoneBookActions.addContactError(error)));
};

const fetchContacts = () => (dispatch) => {
  dispatch(phoneBookActions.fetchContactRequest());

  axios
    .get("http://localhost:2000/contacts")
    .then(({ data }) => {
      dispatch(phoneBookActions.fetchContactSuccess(data));
    })
    .catch((error) => {
      dispatch(phoneBookActions.fetchContactError(error));
    });
};

const onRemoveContacts = (id) => (dispatch) => {
  dispatch(phoneBookActions.removeContactRequest());
  axios
    .delete(`http://localhost:2000/contacts/${id}`)
    .then(() => {
      dispatch(phoneBookActions.removeContactSuccess(id));
    })
    .catch((error) => {
      dispatch(phoneBookActions.removeContactError(error));
    });
};

export default { onAddContact, fetchContacts, onRemoveContacts };

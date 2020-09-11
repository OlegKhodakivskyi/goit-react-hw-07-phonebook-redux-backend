import axios from "axios";
import phoneBookActions from "./phoneBookActions";

const onAddContact = (contacts) => (dispatch) => {
  dispatch(phoneBookActions.addContactRequest());
  axios
    .post("http://localhost:2000/contacts", contacts)
    .then((response) => {
      console.log(response.data.contacts);
      dispatch(phoneBookActions.addContactSuccess(response.data));
    })
    .catch((error) => dispatch(phoneBookActions.addContactError(error)));
};

export default { onAddContact };

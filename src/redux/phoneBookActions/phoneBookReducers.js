import { combineReducers } from "redux";
import phoneBookActionsTypes from "./phoneBookActionTypes";

const items = (state = [], { type, payload }) => {
  switch (type) {
    case phoneBookActionsTypes.ADD_CONTACT_SUCCESS:
      return [...state, payload];

    case phoneBookActionsTypes.DEL:
      console.log(items);
      return state.filter((contacts) => contacts.id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = "", { type, payload }) => {
  switch (type) {
    case phoneBookActionsTypes.FILTER:
      // console.log("t");
      return payload.filter;

    default:
      return state;
  }
};

const alertSwitch = (state = false, { type, payload }) => {
  switch (type) {
    case phoneBookActionsTypes.DUPLICATE:
      return !state;

    default:
      return state;
  }
};

export default combineReducers({ items, filter, alertSwitch });

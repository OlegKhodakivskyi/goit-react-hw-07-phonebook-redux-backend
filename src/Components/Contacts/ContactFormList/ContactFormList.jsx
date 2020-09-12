import React from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { connect } from "react-redux";
import phoneBookOperations from "../../../redux/phoneBookActions/phonebookOperations";
import ContactFormListItem from "./ContactFormListItem/ContactFormListItem";
import styles from "./ContactList.module.css";

const ContactFormList = ({ contacts, onRemoveContacts }) => (
  <>
    <TransitionGroup component="ul" className={styles.contactList}>
      {contacts.map(({ id, name, number }) => (
        <CSSTransition
          key={id}
          timeout={1000}
          classNames={styles}
          unmountOnExit
        >
          <ContactFormListItem
            key={id}
            name={name}
            number={number}
            onRemove={() => onRemoveContacts(id)}
          />
        </CSSTransition>
      ))}
    </TransitionGroup>
  </>
);

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts.filter
      ? state.contacts.items.filter((contact) =>
          contact.name
            .toLowerCase()
            .includes(state.contacts.filter.toLowerCase())
        )
      : state.contacts.items,
  };
};

const mapDispatchToProps = {
  onRemoveContacts: phoneBookOperations.onRemoveContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactFormList);

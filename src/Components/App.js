import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";
import { connect } from "react-redux";
import ContactForm from "./Contacts/ContactForm";
import ContactFormList from "./Contacts/ContactFormList/ContactFormList";
import Filter from "./Filter/Filter";
import styles from "./App.module.css";
import Alert from "./Alert/Alert";
import stylesAlert from "./Alert/Alert.module.css";

class App extends Component {
  render() {
    const { alert } = this.props;
    return (
      <>
        {/* ----------- ALert ----- */}
        {alert && (
          <CSSTransition
            classNames={stylesAlert}
            in={true}
            appear={true}
            timeout={1500}
            unmountOnExit
          >
            <Alert alert={alert} />
          </CSSTransition>
        )}

        {/* ----------- Phonebook ----- */}

        <CSSTransition
          classNames={styles}
          in={true}
          appear={true}
          timeout={1500}
          unmountOnExit
        >
          <h1 className={styles.sectionTitle}>Phonebook</h1>
        </CSSTransition>

        {/* ----------- Contact FORM ----- */}

        <ContactForm />
        <h2 className={styles.contactListTitle}>Contacts</h2>
        <Filter />
        <ContactFormList />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log(state.contacts.alertSwitch);
  return {
    alert: state.contacts.alertSwitch,
  };
};

export default connect(mapStateToProps)(App);

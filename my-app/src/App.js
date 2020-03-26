import React from "react";
import ContactForm from "./component/contactForm/ContactForm";
import ContactList from "./component/contactList/ContactList";
import Filter from "./component/filter/Filter";
import { CSSTransition } from "react-transition-group";
import css from "../src/App.module.css";
import transitionTitle from "./transitionStyle/transitionTitle.module.css";

class App extends React.Component {
  state = {
    contacts: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" }
    ],
    filter: "",
    animation: false
  };

  componentDidMount() {
    if (localStorage.getItem("contacts") === null) {
      localStorage.setItem(
        "contacts",
        JSON.stringify([...this.state.contacts])
      );
    } else {
      this.setState({
        contacts: [...JSON.parse(localStorage.getItem("contacts"))],
        animation:true
      });
    }
  }

  componentDidUpdate() {
   localStorage.setItem("contacts",JSON.stringify(this.state.contacts));
  }

  handelSubmitForm = (e, data) => {
    e.preventDefault();
    const checkName = this.state.contacts.some(
      contact => contact.name === data.name
    );
    !checkName
      ? this.setState(prevState => ({
          contacts: [...prevState.contacts, data]
        }))
      : alert("You can not add this contact!");
  };

  deleteContact = e => {
    const id = e.target.id;
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id)
    }));
  };

  checkName = e => {
    this.setState({
      filter: e.target.value
    });
  };

  filterContacts = () => {
    return this.state.contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(this.state.filter)
    );
  };

  render() {
    const { animation } = this.state;
    return (
      <div className={css.container}>
        <CSSTransition
          in={animation}
          timeout={{ appear: 500, enter: 3000, exit: 5000 }}
          classNames={transitionTitle}
          mountOnEnter
        >
          <h1 className={css.container__caption}>Phonebook</h1>
        </CSSTransition>

        <ContactForm handelSubmitForm={this.handelSubmitForm} />
        {this.state.contacts.length > 2 && (
          <Filter checkName={this.checkName} />
        )}
        <ContactList
          contact={this.filterContacts()}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

export default App;

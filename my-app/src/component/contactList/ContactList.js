import React from "react";
import ContactListItem from "./ContactListItem";
import PropTypes from "prop-types";
import css from "./Contacts.module.css";
import { TransitionGroup, CSSTransition} from "react-transition-group";
import transitionItem from '../../transitionStyle/transitionItem.module.css'

const ContactList = ({ contact, deleteContact }) => {
  return (
    <TransitionGroup component="ul" className={css.contacts__list}>
      {contact.map(contact => (
         <CSSTransition key={contact.id} classNames={transitionItem} timeout={500} unmountOnExit>
        <ContactListItem
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

ContactList.propTypes = {
  deleteContact: PropTypes.func,
  contact: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string
    }).isRequired
  ).isRequired
};
export default ContactList;

import React from "react";
import PropTypes from "prop-types";
import css from './Contacts.module.css'
import {TransitionGroup} from 'react-transition-group'
// import transitionList from '../../transitionStyle/transitionList.module.css'

import ContactListItem from "./ContactListItem";
const ContactList = ({ contact, deleteContact }) => {
  return (
    <TransitionGroup  component="ul" className={css.contacts__list}>
      {contact.map(contact => (
        <ContactListItem
          contact={contact}
          key={contact.id}
          deleteContact={deleteContact}
        />
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

import React from "react";
import PropTypes from "prop-types";
import css from "./Contacts.module.css";



const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <li className={css.contacts__item} key={id}>
      <span className={css.contacts__name}>{name}</span>
      <br />
      <span className={css.contacts__name}>{number}</span>
      <button
        className={css.contacts__btn}
        type="button"
        id={id}
        onClick={deleteContact}
      >
        &#x292B;
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  deleteContact: PropTypes.func,
  id: PropTypes.object,
  name: PropTypes.object,
  number: PropTypes.string
};

export default ContactListItem;

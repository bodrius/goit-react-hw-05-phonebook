import React from "react";
import PropTypes from "prop-types";
import css from "./Contacts.module.css";
import { CSSTransition } from "react-transition-group";
import transitionItem from '../../transitionStyle/transitionItem.module.css'


const ContactListItem = ({ contact: { id, name, number }, deleteContact }) => {
  return (
    <CSSTransition key={id} classNames={transitionItem} timeout={2000} unmountOnExit>
    <li className={css.contacts__item}>
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
    </CSSTransition>
  );
};

ContactListItem.propTypes = {
  deleteContact: PropTypes.func,
  id: PropTypes.object,
  name: PropTypes.object,
  number: PropTypes.string
};

export default ContactListItem;

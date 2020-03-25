import React from 'react'
import css from './Filter.module.css'


const Filter = ({checkName}) => {
    return (
        <div className={css.find__box}>
        <h3 className={css.find__title}>Find contacts by name:</h3>
        <input className={css.find__input} type="text" onChange={checkName}/>
        </div>
    );
}

export default Filter;
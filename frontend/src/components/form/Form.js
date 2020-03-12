import React from 'react';
import PropTypes from 'prop-types';

const mapForm = form => {
    const inputs = form.querySelectorAll("input");

    let result = {};

    inputs.forEach(i => {
        result = {...result, ...mapInput(i)}
    });

    console.log(result);

    return result;
}

const mapInput = ({ type, name, value, checked }) => {
    switch(type) {
        case "checkbox": 
            return { [name]: checked ? value : null }
        case "radio": 
            return checked ? { [name]: value } : null;
        case "submit":
            return {};
        default:
            return  { [name]: value };
    }   
}

const Form = ({ onSubmit, children }) => {

    const submit = e => {
        e.preventDefault();   
        onSubmit(mapForm(e.target));
    }

    return (
        <form onSubmit={submit}>
            {children}
        </form>
    );
};

Form.defaultProps = {
    onSubmit: () => {}
}

Form.propTypes = {
    onSubmit: PropTypes.func,
    children: PropTypes.node
}

export default Form;
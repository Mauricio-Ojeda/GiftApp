import React, { useState } from 'react'
import PropTypes from 'prop-types';

const AddCategory = ({ setCategories }) => {

    const [inputValue, setinputValue] = useState('')

    const handleInputChange = e => {
        setinputValue( e.target.value );

        console.log('llamado de handleInputChange');
    }

    const handleSubmit = e => {
        e.preventDefault();

        if( inputValue.trim().length > 1){
            setCategories(categories => [ inputValue, ...categories ]);
            setinputValue('');    
        }
    }

    return (
        <form onSubmit= { handleSubmit }>
            <input 
                type = "text"
                value = {inputValue}
                placeholder ='Busca tu Gift'
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
  };

export default AddCategory



import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setValue] = useState()

    const onChangeValue = ({target}) => {
        setValue(target.value)
    }

    const onSubmitChange = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim()
        if (newInputValue.length < 1) return;
        onNewCategory(newInputValue)
        setValue('');
        
    }

    return (
        <form onSubmit={onSubmitChange}>
        <input 
        type="text" 
        placeholder="Buscar un Gif"
        value={inputValue || ''}
        onChange={onChangeValue} /** onChangeValue es la forma simplificada de (event) => onChangeValue(event) */
        />
        </form>
    )
}
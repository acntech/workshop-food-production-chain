import { useState, useEffect } from 'react';


export const useDropdown = (defaultElement = {}) => {
    const { description: defaultDescription, value: defaultValue } = defaultElement;
    const [description, setDescription] = useState(defaultDescription);
    const [value, setValue] = useState(defaultValue);
    
    const setElement = element => {
        setDescription(element.description);
        setValue(element.value);
    }

    useEffect(() => {
        setElement(defaultElement);
    }, [defaultElement])

    return [{value, description}, setElement];
};
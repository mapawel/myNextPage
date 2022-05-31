import { useState } from 'react';

const useCollapse = (initialVal) => {

    const [showDescription, setShowDescription] = useState(initialVal);
    const handleCollapse = (title) => {
        if (title === showDescription) return setShowDescription(null)
        setShowDescription(title)
    }

    return {
        showDescription,
        handleCollapse,
    }
}

export default useCollapse
import React from 'react';
import Field from "@/components/Filed.jsx";

const SearchTaskForm = () => {
    return (
        <form className="todo__form">
            <Field
                className='todo__field'
                label='Search task'
                id='search-task'
                type='search'
            />
        </form>
    );
};

export default SearchTaskForm;
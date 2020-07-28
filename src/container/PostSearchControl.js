import React, {useState} from 'react';

const PostSearchControl = props => {
    const [keys, setKeys] = useState('');

    const onChange = (e) => {
        var target = e.target;
        var value = target.value;
        setKeys(value);
        props.onSearch(keys)
    }

    return(
        <form className='navbar-form pull-right'>
            <input
                type='text' 
                style={{ width: '200px' }} 
                onChange={ onChange }
                value={ keys }
                />
        </form>
    )
}

export default PostSearchControl;
import React from 'react';


const PostSortControl = props => {

    const onClick = (price, count) => {
        props.onSort(price, count)
    }

    return(
        <div className='col-xs-6 col-sm-6 col-md-6 col-lg-6'>
        <div className='dropdown'>
            <button
                className='btn btn-primary dropdown-toggle'
                type='button'
                id='dropdownMenu1'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='true'
            >
                <i className="far fa-address-card"></i> Sort
            </button>
            <ul className='dropdown-menu' aria-labelledby='dropdownMenu1'>
                <li onClick={() => onClick('price', 1)}>
                    <a href=' #' role='button' className='sort_selected'>
                        <span className='fa fa-sort-alpha-asc'>high to low</span>
                    </a>
                </li>
                <li onClick={() => onClick('price', -1)}>
                    <a href=' #' role='button' className='sort_selected'>
                        <span className='fa fa-sort-alpha-desc'>low to high</span>
                    </a>
                </li>
                <li role='separator' className='divider' />
                <li onClick={() => onClick('status', 1)}>
                    <a href=' #' role='button' className='sort_selected'>
                        Count
                    </a>
                </li>
                <li onClick={() => onClick('status', -1)}>
                    <a href=' #' role='button' className='sort_selected'>
                        Uncount
                    </a>
                </li>
            </ul>
        </div>
    </div>
    );
}

export default PostSortControl;
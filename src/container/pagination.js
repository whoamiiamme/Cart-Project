import React from 'react';

const Pagination = ({oncurr}) => {
    const numberPage = []
    for (var i = 1;i <= Math.ceil(oncurr.total/oncurr.numberPost); i++) {
        numberPage.push(i);
    }

    if(oncurr.total < 0) {
        return;
    }

    return (
        <ul className="pagination">
            {numberPage.map(number => (
            <li key={number} >
                <a onClick={() => oncurr.currPage(number)}
                      href=" #">

                    {number}
                </a></li>))}
        </ul>

        
    );
};

export default Pagination;

import React from 'react';
import ReactPaginate from 'react-paginate';
import './ForecastPagination.scss';

export default function ForecastPagination({pageCount, pageChange}) {

    return (
        <React.Fragment>
            <ReactPaginate 
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={null}
                marginPagesDisplayed={0}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                onPageChange={pageChange}
                containerClassName={'pagination'}
                pageLinkClassName={'page-link'}
                previousLinkClassName={'page-link prev-link'}
                nextLinkClassName={'page-link next-link'}
                activeClassName={'page-active'}
                    />
        </React.Fragment> 
        
    )
}


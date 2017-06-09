import React from 'react';

import ReactPaginate from 'react-paginate';

import './styles/Pagination.css';

const Pagination = ({skip, pageCount, limit, changePage}) => (
    <div style={{textAlign: 'center'}}>
        <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       initialPage = {skip}
                       pageCount={pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={limit}
                       onPageChange={changePage}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"}/>
    </div>
);

export default Pagination;
import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import "./style.css"

export default function PaginationComponent({page, handlePageChange, totalPages}) {
    
   

    return (
        <div className='pagination-component'>
            <Pagination count={totalPages} page={page} onChange={(e,value) => handlePageChange(e,value)} sx={{
                color: "var(--white)",
                "& .Mui-selected": {
                    backgroundColor: "var(--blue) !important",
                    color: "#fff !important",
                    borderColor: "var(--blue) !important"
                },
                "& .MuiPaginationItem-ellipsis": {
                    border: "0px solid var(--grey) !important",
                },
                "& .MuiPaginationItem-text": {
                    color: "var(--white)",
                    border: "1px solid var(--grey",
                }
            }}/>
        </div>
    );
}
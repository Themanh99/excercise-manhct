import React, { useEffect, useState } from 'react';
import PaginationComponent from '../components/Pagination';
import productApi from '../../../api/productApi';


function Pagination(props) {
    const [pagination, setPagination] = useState({
        _page: 1,
        _limit: 10,
        _totalRows: 1
    });

    function handlePageChange(newPage) {
        // console.log(newPage);
    }
    useEffect(() => {
        const fetchApi = async () => {
            const params = {
                _limit: 10
            }
            const productData = await productApi.getAll(params);
            console.log(productData);
        }
        fetchApi();
    }, [])
    return (
        <PaginationComponent
            pagination={pagination}
            onPageChange={handlePageChange}
        />
    );
}

export default Pagination;
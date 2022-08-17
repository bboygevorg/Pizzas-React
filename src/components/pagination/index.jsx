import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { setPageCount } from '../../redux/slices/filterSlice';

const Pagination = () => {
  const pageCount = useSelector((state) => state.filter.pageCount);
  const dispatch = useDispatch();

  const onChangePage = (number) => {
    dispatch(setPageCount(number));
  };

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      onPageChange={(event) => onChangePage(event.selected + 1)}
      pageRangeDisplayed={5}
      pageCount={2}
      previousLabel="<"
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

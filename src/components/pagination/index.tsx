import React from 'react';
import ReactPaginate from 'react-paginate';
import styles from './pagination.module.scss';
import { useSelector, useDispatch } from 'react-redux';

import { setPageCount } from '../../redux/slices/filter/slice';
import { selectPage } from '../../redux/slices/filter/selector';

const Pagination: React.FC = () => {
  const pageCount = useSelector(selectPage);
  const dispatch = useDispatch();

  const onChangePage = (number: number) => {
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
      // renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;

import React from 'react';
import { useNavigate } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { useAppDispatch } from '../redux/store';
import { selectFilter } from '../redux/slices/filter/selector';
import { selectPizzaData } from '../redux/slices/pizza/selectors';

import qs from 'qs';

import { Pagination, Categories, SortPopup, PizzaBlock, Skeleton } from '../components';

import { fetchPizzas } from '../redux/slices/pizza/slice';

const Home: React.FC = () => {
  const { categoryId, sort, pageCount, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzaData);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const getPizzas = async () => {
    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `${searchValue}` : '';
    const page = 12;

    dispatch(
      fetchPizzas({
        category,
        sortBy,
        order,
        search,
        page: String(page),
        pageCount: String(pageCount),
      }),
    );

    window.scrollTo(0, 0);
  };

  const pizzas = items
    // .filter((obj) => {
    //   if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }

    //   return false;
    // })
    .map((obj: any, index: number) => <PizzaBlock key={obj.id} {...obj} />);

  const skeletons = [...new Array(12)].map((_, index) => <Skeleton key={index} />);

  //Если изменили параметры и был первый рендер
  // React.useEffect(() => {
  //   if (isMounted.current) {
  //     const queryString = qs.stringify({
  //       sortProperty: sort.sortProperty,
  //       categoryId,
  //       pageCount,
  //     });
  //     navigate(`?${queryString}`);
  //   }
  //   isMounted.current = true;
  // }, [categoryId, sort.sortProperty, pageCount]);

  //Если был первый рендер, то проверяем URL-параметры и сохраняем в редуксе
  // React.useEffect(() => {
  //   if (window.location.search) {
  //     const params = qs.parse(window.location.search.substring(1)) as unknown as SeacrhPizzaParams;
  //     const sort = list.find((obj) => obj.sortProperty === params.sortBy);

  //     dispatch(
  //       setFilters({
  //         ...params,
  //         sort: sort || list[0]
  //       }),
  //     );
  //     isSearch.current = true;
  //   }
  // }, []);

  // Если был первый рендер то запрашиваем пиццы
  React.useEffect(() => {
    getPizzas();
  }, [categoryId, sort.sortProperty, searchValue, pageCount]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <SortPopup />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка😕</h2>
          <p>К сожалению, не удалось получить пиццы. попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
      )}

      <Pagination />
    </div>
  );
};

export default Home;

import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../App';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '../components/pagination';
import { setFilters } from '../redux/slices/filterSlice';

import Categories from '../components/Categories';
import Sort, { list } from '../components/Sort';
import PizzaBlock from '../components/pizzaBlock';
import Skeleton from '../components/pizzaBlock/Skeleton';

function Home() {
  const { categoryId, sort, pageCount } = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);

  const { searchValue } = React.useContext(SearchContext);
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const fetchPizzas = () => {
    setIsLoading(true);

    const category = categoryId > 0 ? `&category=${categoryId}` : '';
    const sortBy = sort.sortProperty.replace('-', '');
    const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
    const search = searchValue ? `${searchValue}` : '';
    const page = 12;

    // fetch(
    //   `https://62e7df6493938a545bdb42d3.mockapi.io/items?page=${currentPage}&limit=${page}${category}&sortBy=${sortBy}&order=${order}&search=${search}`,
    // )
    //   .then((resp) => {
    //     return resp.json();
    //   })
    //   .then((arr) => {
    //     setItems(arr);
    //     setIsLoading(false);
    //   });
    axios
      .get(
        `https://62e7df6493938a545bdb42d3.mockapi.io/items?page=${pageCount}&limit=${page}${category}&sortBy=${sortBy}&order=${order}&search=${search}`,
      )
      .then((res) => {
        setItems(res.data);
        setIsLoading(false);
      });
  };

  const pizzas = items
    // .filter((obj) => {
    //   if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
    //     return true;
    //   }

    //   return false;
    // })
    .map((obj, index) => <PizzaBlock key={`${obj}_${index}`} {...obj} />);
  const skeletons = [...new Array(12)].map((_, index) => <Skeleton key={index} />);

  //Если изменили параметры и был первый рендер
  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        pageCount,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, pageCount]);

  //Если был первый рендер, то проверяем URL-параметры и сохраняем в редуксе
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty == params.sortProperty);

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
      isSearch.current = true;
    }
  }, []);

  //Если был первый рендер то запрашиваем пиццы
  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      fetchPizzas();
    }
    isSearch.current = false;
  }, [categoryId, sort.sortProperty, searchValue, pageCount]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">{isLoading ? skeletons : pizzas}</div>
      <Pagination />
    </div>
  );
}

export default Home;

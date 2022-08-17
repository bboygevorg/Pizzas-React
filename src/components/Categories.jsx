import React from 'react';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setCategoryId } from '../redux/slices/filterSlice';

const Categories = () => {
  const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
  const categoryId = useSelector((state) => state.filter.categoryId);
  const dispatch = useDispatch();

  const onClickCategory = (id) => {
    dispatch(setCategoryId(id));
  };

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, index) => {
          return (
            <li
              onClick={() => {
                onClickCategory(index);
              }}
              className={categoryId === index ? 'active' : ''}
              key={`${categoryName}_${index}`}>
              {categoryName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Categories;

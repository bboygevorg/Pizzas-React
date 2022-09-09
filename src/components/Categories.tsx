import React from 'react';
import useWhyDidYouUpdate from 'ahooks/lib/useWhyDidYouUpdate';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { setCategoryId } from '../redux/slices/filter/slice';
import { selectCategoryId } from '../redux/slices/filter/selector';

const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

const Categories: React.FC = React.memo(() => {
  const categoryId = useSelector(selectCategoryId);
  const dispatch = useDispatch();

  const onClickCategory = (id: any) => {
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
});

export default Categories;

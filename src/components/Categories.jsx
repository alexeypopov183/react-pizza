import React, {useState} from 'react';

const Categories = React.memo(function Categories({items, onClickItem}) {
  const [activeItem, setActiveItem] = useState(null);

  const onSelectItem = (index) => {
    console.log('INDEX',index)
    setActiveItem(index)
    onClickItem(index)
  }
  console.log('RERENDER CATEGORIES')
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => setActiveItem(null)}
        >
          Все
        </li>
        {items &&
          items.map((item, index) =>
            (<li
              className={activeItem === index ? 'active' : ''}
              onClick={() => onSelectItem(index)}
              key={item}
            >
              {item}
            </li>))}
      </ul>
    </div>
  );
})

export default Categories;
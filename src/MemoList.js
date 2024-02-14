import React, { useMemo, useState } from "react";
import _ from "lodash";

const MemoList = ({ items }) => {
  const [selectedItems, setSelectedItems] = useState([]);
  const total = useMemo(() => {
    return items.length + selectedItems.length;
  }, [items, selectedItems]);

  const handleClick = (item) => {
    setSelectedItems((prev) => [...prev, item]);
  };

  return (
    <div>
      <h2>Items</h2>
      <ul>
        {_.map(items, (item, id) => (
          <ul onClick={() => handleClick(item)} key={id}>
            {item}
          </ul>
        ))}
      </ul>
      <h4>Total Count:{total}</h4>
    </div>
  );
};

export default MemoList;

import './ItemsListMap.css';
import ItemsListCard from '../ItemsListCard/ItemsListCard.jsx';

function ItemsListMap({items}) {
  // Categories element
  const itemsList = []

  // Add UI for category items into categories element
  items.map((item, index) => {
    itemsList.push(
      <ItemsListCard item={item} key={index}/>
    );
  })

  return (itemsList)
}

export default ItemsListMap;
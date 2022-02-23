import React from 'react';
import ItemDetails from './ItemDetails';
import {useSelector} from 'react-redux';

const ItemList = () =>  {
    const {items} = useSelector(state=>state);
    return (
      <div className = 'container'>
        <div className='row'>
        {items && 
        items.map(item=><ItemDetails item = {item} key = {item.id}/>)}
        </div>       
      </div>
    )
}

export default ItemList;

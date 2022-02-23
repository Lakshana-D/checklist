import React from 'react'
import {useDispatch} from 'react-redux';
import {deleteItem} from '../store/actions/postAction'

const ItemDetails = ({item}) => {
  const dispatch = useDispatch();
    return (
      <div className='col s12 m6'>
          <div className = 'card'>
            <div className = 'card-content'>
                <span className = 'card-title'>{item.title}</span>
                <p>{item.content}</p>
            </div>
            <div className = 'card-action'>
                <button onClick = {()=> dispatch(deleteItem(item.id))} 
                className = "btn red"> Delete </button>
            </div>
          </div>
      </div>  
    )
  }


export default ItemDetails;
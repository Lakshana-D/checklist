import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import { v4 as uuidv4 } from "uuid";
import {addItem} from '../store/actions/postAction'

const AddItem =()=>{
  const[item,setItem] = useState({
    id:'',
    title:'',
    content:''
  })

const dispatch = useDispatch();

const handleChange=(e)=>{
setItem({...item,[e.target.name]: e.target.value})

};

const handleSubmit=(e)=>{
  e.preventDefault();
  dispatch(addItem(item))
  setItem({
      id: uuidv4(),
      title:' ',
      content:''    
  });
}
    return (
      <div className='container' style = {{margin: '4rem auto'}}>
        <h5 className='blue-text center-align'>Check List</h5>
        <form onSubmit= {handleSubmit}>
            <div class = 'input-field'>
                <label htmlFor='item_title'>Title</label>
                <input onChange = {handleChange} value = {item.title} type = "text" name = "title" />
            </div>
            <div class = 'input-field'>
                <label htmlFor='item_content'>Content</label>
                <textarea onChange = {handleChange} value ={item.content} name = "content" className='materialize-textarea'></textarea>
            </div>
            <div className = 'input-field'>
                <button className = "btn blue">
                    Submit 
                   <i className = 'material-icons right'>check_circle</i>
                </button>
            </div>
        </form>
      </div>
    )
  }



export default AddItem;

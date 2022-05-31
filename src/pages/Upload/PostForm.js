import React,{useState } from 'react';
import axios from 'axios';
import './Upload.css';
import './PostForm.css' 



 function PostForm () {
    const url = ""
    const [data, setData] = useState({
      userName: "",
      genre: "",
      year: "",
      material: "",
      status: "",
      dimension: "",
      price: ""
    })
    function handle(e){
  
    }
    return (
      <div> 
        <form>
            <input onChange={(e)=>handle(e)} id="name" value={data.userName} placeholder="Ваше имя"></input> <br></br>
            <input onChange={(e)=>handle(e)} id="genre" value={data.genre} placeholder="Жанр"></input> <br></br>
            <input onChange={(e)=>handle(e)} id="year" value={data.year} placeholder="Год"></input> <br></br>
            <input onChange={(e)=>handle(e)} id="material" value={data.material} placeholder="Материал"></input> <br></br>
            <input onChange={(e)=>handle(e)} id="status" value={data.status} placeholder="Статус"></input> <br></br>
            <input onChange={(e)=>handle(e)} id="dimension" value={data.dimension} placeholder="Размеры вашей картины"></input> <br></br>
            <input onChange={(e)=>handle(e)} id="material" value={data.material} placeholder="Материал"></input> <br></br>
            <input onChange={(e)=>handle(e)} id="price" value={data.price} placeholder="Цена"></input> <br></br>
        </form>
      </div>
    )
  }
  
  export default PostForm;
  {/* <div className="form-row2">
    <button type="submit" className="btn btn-dark" onClick={()=>submit()} > Сохранить </button>
  </div> */}


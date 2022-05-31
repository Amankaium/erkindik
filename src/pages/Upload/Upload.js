import React,{useState } from 'react';

// import ReactDOM from 'react-dom'

import axios from 'axios';
import './Upload.css';
// import PostForm from './PostForm'
// import './PostForm.css'

function Upload() {

  const [userInfo, setuserInfo] = useState({
    file:[],
    filepreview:null,
   });
  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file:event.target.files[0],
      filepreview:URL.createObjectURL(event.target.files[0]),
    });

    setData({
        ...data,
        image: event.target.files[0]
    })

  }

  const [data, setData] = useState({
        name: "",
        description: "",
        genre: "",
        year: "",
        material: "",
        status: "",
        dimension: "",
        price: "",
        image: ""
    });
    function changeField(e) {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }
    function createNewArt(event) {
        event.preventDefault()
        axios.post(
            "http://kaiaman.pythonanywhere.com/api/erkindik/arts/",
            data,
            {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            }
        ).then((res) => {
            if (res.status === 201) {
                alert("Картина успешно добавлена")
            }
            return res;
        }).catch((error) => {
            return error.response;
        });
    }
console.log()
  const [isSuccess, setSuccess] = useState(null);

  return (
    <div className="container_mr-60">
        <form onSubmit={createNewArt}>
            <h3 className="text-upload"> Загрузите свои изображения </h3>

            <div className="formdesign">
            {isSuccess !== null ? <h4 className='imageUploadSuccess'> {isSuccess} </h4> :null }
            <div className="form-row1">
                <label className="text-select">Выбрать :</label>
                <input type="file" className="form-select" name="image"  onChange={handleInputChange} />
            </div>
            </div>
        <div className='FormDataUserr'>
            <input name="name" placeholder='Ваше имя' type="text" value={data.name} onChange={changeField}/> <br></br>
              <input name="genre" placeholder='Жанр вашей картины' type="text" value={data.genre} onChange={changeField} /> <br></br>
              <input name="year" placeholder='Текущий год' type="number" value={data.year} onChange={changeField} /> <br></br>
              <input name="material" placeholder='Материалы' type="text" value={data.material} onChange={changeField} /> <br></br>
              <input name="status" placeholder='Статус' type="text" value={data.status} onChange={changeField} /> <br></br>
              <input name="dimension" placeholder='Размеры картины' type="text" value={data.dimension} onChange={changeField} /> <br></br>
              <input name="price" placeholder='Стоимость' type="number" value={data.price} onChange={changeField} />  <br></br>      
            {userInfo.filepreview !== null ? 
        
            <img className="previewimg" src={userInfo.filepreview} alt="UploadImage" />
            : null}
            <div className="form-row2">
            </div>
                <button type="submit" className="btn btn-dark"> Сохранить </button>
            </div>
        </form>
    </div>
  );
  }

export default Upload;

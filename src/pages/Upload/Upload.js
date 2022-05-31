import React,{useState } from 'react';
import axios from 'axios';
import './Upload.css';
artists


 main

function App() {

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

  }

  const [isSuccess, setSuccess] = useState(null);

  const submit = async () =>{
    const formdata = new FormData(); 
    formdata.append('avatar', userInfo.file);

    axios.post("http://localhost:8080/imageupload", formdata,{
            headers: { "Content-Type": "multipart/form-data" } 
    })
    .then(res => { // then print response status
      console.warn(res);
      if(res.data.success === 1){
        setSuccess("Image upload successfully");
      }

    })
  }

  return (
    <div className="container mr-60">
      <h3 className="text-white"> Загрузите свои изображения </h3>

      <div className="formdesign">
      {isSuccess !== null ? <h4> {isSuccess} </h4> :null }
        <div className="form-row">
          <label className="text-white">Выбрать :</label>
          <input type="file" className="form-control" name="upload_file"  onChange={handleInputChange} />
        </div>

        <div className="form-row">
          <button type="submit" className="btn btn-dark" onClick={()=>submit()} > Сохранить </button>
          
        </div>
      </div>
      
      {userInfo.filepreview !== null ? 
        <img className="previewimg"  src={userInfo.filepreview} alt="UploadImage" />
      : null}

    </div>
  );
}

export default App;
import axios from 'axios';
import { useState } from 'react';

const UploadImage = () => {
    const [file, setFile]=useState(null);

    const handleImageUpload= async()=>{
        const formData= new FormData();
        formData.append("file", file);

        const url=`http://localhost:3000/api/uploadImage`;
        const res= await axios.post(url, formData);
        console.log(res);
    }

    return ( <>
        <div>
            Upload Image
        </div>
        <input type='file' onChange={(e)=>setFile(e.target.files[0])}></input>
        <button onClick={handleImageUpload}>Upload Image</button>
    </> );
}
 
export default UploadImage;
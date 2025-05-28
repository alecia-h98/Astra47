import React from 'react';
import useStore from '../../zustand/store'
import { useState } from 'react';
import { useGlitch } from 'react-powerglitch';
import UploadWidget from './UploadWidget';
import { Cloudinary } from "@cloudinary/url-gen/index";
import { AdvancedImage } from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";


function AddPhotoPage() {
  const user = useStore((state) => state.user);
  const addPhoto = useStore((state) => state.addPhoto);
  const [photoInput, setPhotoInput] = useState('');
  const [titleInput, setTitleInput] = useState('');
  const [descriptionInput, setDescriptionInput] = useState('');


  //There is a bug that is uploading two new entries to the database. One with the correct cloudinary upload and one that is blank. The backend function is working correctly. Although whenever you click the upload button, it is creating a new entry in the database. I think it is because of the useEffect in the UploadWidget component. I will try to fix this later. For now, I will just comment out the useEffect and see if that fixes it.
  


    //----CLOUDINARY INFO----//

    // Create a Cloudinary instance and set your cloud name.
    const cld = new Cloudinary({
        cloud: {
          cloudName: 'dcek4jlvk'
        }
      });
  
        // Instantiate a CloudinaryImage object for the image with the public ID, 'docs/models'.
    const myImage = cld.image('docs/result.info.public_id'); 
  
    // Resize to 250 x 250 pixels using the 'fill' crop mode.
    myImage.resize(fill().width(150).height(150));


    //-----REGULAR FORM INFO-----//
    const formPhotoHandler = (event) => {
        event.preventDefault();

        const newPhoto = {
            user_id: user.id,
            cloudinary_url: photoInput,
            title: titleInput,
            description: descriptionInput
        }

        console.log('newPhoto', newPhoto);

        addPhoto(newPhoto);

        setPhotoInput('');
        setTitleInput('');
        setDescriptionInput('');
    }

  return (
    <>
      <h2 className="glitch" data-text='text'>AddPhoto:</h2>
      <section>
        <form id="form" onSubmit={formPhotoHandler}>

            <UploadWidget setPhotoInput={setPhotoInput}/>
            <label>Image:</label>
            <input placeholder={photoInput} />
            {photoInput && <img id="uploadedPhoto" src={photoInput} height={auto} width={200} />}

            <label>Title:</label>
            <input type="text" placeholder="(optional)" value={titleInput} onChange={(event) => setTitleInput(event.target.value)} />

            <label>Description:</label>
            <input type="text" placeholder="(optional)" value={descriptionInput} onChange={(event) => setDescriptionInput(event.target.value)} />

            <button type='submit'>Add photo</button>

        </form>
      </section>



    </>
  );
};


export default AddPhotoPage;

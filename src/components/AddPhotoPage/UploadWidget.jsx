import React from "react"
import { useEffect } from "react";
import { useRef } from "react";

const UploadWidget = ({setPhotoInput}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget({
      cloudName: 'dcek4jlvk',
      uploadPreset: '_astra47'
    }, function(error, result) {
      if (!error && result && result.event === "success") {
        console.log(result);
        setPhotoInput(result.info.secure_url);
        console.log('Done! Here is the public ID: ', result.info.public_id);
      }
    });
  }, []);

  return (
    <button onClick={() => widgetRef.current.open()}>
      Upload photo
    </button>
  );
};



export default UploadWidget;

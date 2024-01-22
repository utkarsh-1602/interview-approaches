"use client"
import { CldUploadWidget } from 'next-cloudinary';
import styles from '../styles/uploadButton.module.css'
import { useState } from 'react';
import Image from 'next/image';

const UploadButton = () => {

  const [info, updateInfo] = useState();
  const [error, updateError] = useState();

  function handleOnUpload(error:any, result:any, widget:any) {
    if ( error ) {
      updateError(error);
      return;
    }

    updateInfo(result?.info);

    widget.close({
      quiet: true
    });
  }

  let uploadPreset = process.env.NEXT_PUBLIC_UPLOAD_PRESET;


  return (
    <>
    <main className={styles.container}>
        <CldUploadWidget uploadPreset={uploadPreset} onUpload={handleOnUpload}>
            {({ open }) => {
              function handleOnClick(e:any) {
                e.preventDefault();
                open();
              }
              return (
                <button type='button' className="btn btn-primary text-white" onClick={handleOnClick}>
                  Upload an Asset
                </button>
              )
            }}
          </CldUploadWidget>
    </main>
    </>
  )
}

export default UploadButton
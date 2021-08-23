import React, { useCallback } from 'react';
import { Avatar, Input } from 'antd';
import { useDropzone } from 'react-dropzone';

import NoAvatar from 'assets/img/png/no-avatar.png';

export const UploadAvatar = ({ avatar, setAvatar }) => {
   const onDrop = useCallback(
      (acceptedFiles) => {
         const file = acceptedFiles[0];
         setAvatar({ file, preview: URL.createObjectURL(file) });
      },
      [setAvatar]
   );

   const { getRootProps, getInputProps, isDragActive } = useDropzone({
      accept: 'image/jpeg, image/png',
      noKeyboard: true,
      onDrop,
   });

   return (
      <div className='upload-avatar' {...getRootProps()}>
         <Input {...getInputProps()} />
         {isDragActive ? <Avatar size={150} src={NoAvatar} /> : <Avatar size={150} src={avatar ? avatar.preview : NoAvatar} />}
      </div>
   );
};

import React, { useEffect, useState } from 'react';
import { notification, Spin } from 'antd';
import moment from 'moment';
import 'moment/locale/es';

import { getPostApi } from 'api/post';

import './PostInfo.scss';

const PostInfo = ({ url }) => {
   const [postInfo, setPostInfo] = useState(null);

   useEffect(() => {
      if (url) {
         getPostApi(url)
            .then((response) => {
               if (response?.code !== 200) {
                  notification['warning']({
                     message: response.msg,
                  });
               } else {
                  setPostInfo(response.post);
               }
            })
            .catch(() => {
               notification['error']({
                  message: 'Error del servidor',
               });
            });
      }
   }, [url]);

   if (!postInfo) {
      return (
         <Spin
            //
            tip='Cargando'
            style={{ width: '100%', padding: '200px 0' }}
         />
      );
   }

   return (
      <div className='post-info'>
         <h1 className='post-info__title'>{postInfo.title}</h1>

         <div className='post-info__creation-date'>{moment(postInfo.date).locale('es').format('LL')}</div>

         <div
            //
            className='post-info__description'
            // linea para convertir todo lo que viene como html
            dangerouslySetInnerHTML={{ __html: postInfo.description }}
         />
      </div>
   );
};

export default PostInfo;

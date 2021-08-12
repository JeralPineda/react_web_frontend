const { apiVersion, basePath } = require('./config');

export const signUpApi = (data) => {
   const url = `${basePath}/${apiVersion}/user/signup`;

   const params = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
         'Content-Type': 'application/json',
      },
   };

   fetch(url, params).then((response) => {
      //    return resp.json();
      console.log(response);
   });
};

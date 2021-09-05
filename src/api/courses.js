const { basePath, apiVersion } = require('./config');

export const getCoursesApi = () => {
   const url = `${basePath}/${apiVersion}/courses/get-courses`;

   return fetch(url)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         return result;
      })
      .catch((err) => {
         return err;
      });
};

export const getCourseDataUdemyApi = (id) => {
   const baseUrl = `https://www.udemy.com/api-2.0/courses/${id}`;
   const coursesParams = `?fields[course]=title,headline,url,price,image_480x270`;
   const url = baseUrl + coursesParams;

   return fetch(url)
      .then(async (response) => {
         return { code: response.status, data: await response.json() };
      })
      .then((result) => {
         return result;
      })
      .catch((err) => {
         return err;
      });
};

export const deleteCourseApi = (token, id) => {
   const url = `${basePath}/${apiVersion}/courses/delete-course/${id}`;

   const params = {
      method: 'DELETE',
      headers: {
         'Content-Type': 'application/json',
         'x-token': `Bearer ${token}`,
      },
   };

   return fetch(url, params)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         return result;
      })
      .catch((err) => {
         return err;
      });
};

export const addCourseApi = (token, course) => {
   const url = `${basePath}/${apiVersion}/courses/add-course`;

   const params = {
      method: 'POST',
      headers: {
         'Content-Type': 'application/json',
         'x-token': `Bearer ${token}`,
      },
      body: JSON.stringify(course),
   };

   return fetch(url, params)
      .then((response) => {
         return response.json();
      })
      .then((result) => {
         return result;
      })
      .catch((err) => {
         return err;
      });
};

import React from 'react';
import { List } from 'antd';
import { UserInactive } from './UserInactive';

export const UsersInactive = ({ usersInactive, setReloadUsers }) => {
   return (
      <List
         //
         className='users-active'
         itemLayout='horizontal'
         dataSource={usersInactive}
         renderItem={(user) => (
            <UserInactive //
               user={user}
               setReloadUsers={setReloadUsers}
            />
         )}
      />
   );
};

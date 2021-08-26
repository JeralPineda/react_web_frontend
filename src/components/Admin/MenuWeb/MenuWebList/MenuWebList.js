import React, { useEffect, useState } from 'react';
import { Switch, Button, List, Modal as ModalAnrd, notification } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import DragSortableList from 'react-drag-sortable';

import Modal from 'components/Modal';

import './MenuWebList.scss';
import { MenuItem } from './MenuItem';

const { confirm } = ModalAnrd;

const MenuWebList = ({ menu, setReloadMenuWeb }) => {
   const [listItems, setListItems] = useState([]); //guardamos los item
   // Cerrar el modal
   const [isVisibleModal, setIsVisibleModal] = useState(true);

   // Titulo del modal
   const [modalTitle, setModalTitle] = useState('');

   const [modalContent, setmodalContent] = useState(null);

   useEffect(() => {
      const listItemArray = [];

      menu.forEach((item) => {
         listItemArray.push({
            content: <MenuItem item={item} />,
         });
      });

      setListItems(listItemArray);
   }, [menu]);

   const onSort = (sortedList, dropEvent) => {
      console.log(sortedList);
   };

   return (
      <div className='menu-web-list'>
         <div className='menu-web-list__header'>
            <Button type='primary'>Menu</Button>
         </div>

         <div className='menu-web-list__items'>
            <DragSortableList items={listItems} onSort={onSort} type='vertical' />
         </div>
      </div>
   );
};

export default MenuWebList;

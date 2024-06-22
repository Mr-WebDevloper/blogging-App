import { INavData } from '@coreui/angular';



export const AdminItems: INavData[] = [
  {
    name: 'Admin',
  },
  
  {
    name: 'Add category',
    url: '/add-category',
    iconComponent: { name: 'cil-list' }
  },
  {
    name: 'Add Blog',
    url: '/add-blog',
    iconComponent: { name: 'cil-pen' }
  },

];





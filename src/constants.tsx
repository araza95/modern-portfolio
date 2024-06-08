// React Icon Imports
import { SiPolymerproject } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';
import { FiHome } from 'react-icons/fi';

// Types Imports
import { ISideNavItems } from './types/types/index.type';

export const SIDE_NAV_ITEMS: ISideNavItems[] = [
  {
    title: 'Home',
    path: '/',
    icon: <FiHome />,
  },
  {
    title: 'Projects',
    path: '/projects',
    icon: <SiPolymerproject />,
  },
  {
    title: 'Education',
    path: '/education',
    icon: <FaGraduationCap />,
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <RiContactsBookFill />,
  },
];

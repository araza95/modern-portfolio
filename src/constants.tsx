// React Icon Imports
import { SiPolymerproject } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';
import { FiHome } from 'react-icons/fi';

export const SIDE_NAV_ITEMS: {
  title: string;
  path: string;
  icon: JSX.Element;
}[] = [
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

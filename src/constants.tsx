// React Icon Imports
import { SiPolymerproject } from 'react-icons/si';
import { FaGraduationCap } from 'react-icons/fa';
import { RiContactsBookFill } from 'react-icons/ri';
import { FiHome } from 'react-icons/fi';
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

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



export const Links_Data = [
  {
    path: 'https://github.com/araza95',
    icon: <FaGithub />,
  },
  {
    path: 'https://www.linkedin.com/in/syedalihaiderrizvi/',
    icon: <FaLinkedinIn />,
  },
  {
    path: 'https://www.instagram.com/ahaider60?igsh=azV3dnZqeXVqOGVi',
    icon: <FaInstagram />,
  },
  {
    path: 'https://www.youtube.com/@SyedRazaRizviOfficial',
    icon: <FaYoutube />,
  },
  {
    path: 'https://www.facebook.com/raza152009',
    icon: <FaFacebookF />,
  },
];

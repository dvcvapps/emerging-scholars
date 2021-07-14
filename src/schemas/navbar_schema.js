export const NAVBAR_SCHEMA = {
  home: {
    text: 'ELSSA',
    href: '/home',
  },
  items: [
    {
      dropdown: false,
      isActive: false,
      text: 'Our Story',
      icon: 'book',
      href: '/about-us',
    },
    {
      dropdown: false,
      isActive: false,
      text: 'Contact Us',
      icon: 'envelope',
      href: '/contact-us',
    },
    {
      dropdown: false,
      isActive: false,
      text: 'Board Members',
      icon: 'users',
      href: '/board_members',
    },
  ],
  donate: {
    text: 'Donate',
    href: '/donate',
  },
};

export default {
  NAVBAR_SCHEMA,
};

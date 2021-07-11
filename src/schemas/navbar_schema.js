export const NAVBAR_SCHEMA = {
  home: {
    text: 'ELSSA',
    href: '/home',
  },
  items: [
    {
      dropdown: false,
      isActive: false,
      text: 'Contact Us',
      href: '/contact-us',
    },
    {
      dropdown: false,
      isActive: false,
      text: 'Board Members',
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

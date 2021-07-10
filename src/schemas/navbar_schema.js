export const NAVBAR_SCHEMA = {
  home: {
    text: 'Home',
    href: '/home',
  },
  items: [
    {
      dropdown: false,
      isActive: false,
      text: 'About',
      href: '/about',
    },
    {
      dropdown: false,
      isActive: false,
      text: 'Board Members',
      href: '/board_members',
    },
    {
      dropdown: false,
      isActive: false,
      text: 'Donate',
      href: '/donate',
    },

  ],
};

export default {
  NAVBAR_SCHEMA,
};

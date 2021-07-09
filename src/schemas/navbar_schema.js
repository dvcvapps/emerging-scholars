export const NAVBAR_SCHEMA = {
  home: {
    text: 'home',
    href: '/home',
  },
  items: [
    {
      dropdown: false,
      isActive: false,
      text: 'about',
      href: '/about',
    },
    {
      dropdown: false,
      isActive: false,
      text: 'donate',
      href: '/donate',
    },

  ],
};

export default {
  NAVBAR_SCHEMA,
};

import Language from '../../components/organisms/Language';

export interface menuItem {
  name: string;
  icon?: string;
  items?: menuItem[];
  link?: string;
  href?: string;
  opens?: React.ReactNode;
  element?: React.ReactNode;
}

export const menuItems: menuItem[] = [
  {
    name: 'Dapplet',
    items: [
      {
        name: 'Explore',
        icon: 'compass',
        link: '/',
      },
      {
        name: 'Build',
        icon: 'bricks',
        link: '/build',
      },
      {
        name: 'Develop',
        icon: 'gem',
        link: '/develop',
      },
      {
        name: 'Resources',
        icon: 'book',
        items: [
          {
            name: 'Docs',
            icon: 'book',
            href: 'https://docs.dapplet.app/',
          },
          {
            name: 'GitHub',
            icon: 'github',
            href: 'https://github.com/dapplet',
          },
          {
            name: 'Twitter',
            icon: 'twitter',
            href: 'https://twitter.com/dappletapp',
          },
        ],
      },
      {
        name: 'Settings',
        icon: 'gear-wide-connected',
        items: [
          {
            name: 'Language',
            icon: 'translate',
            opens: <Language />,
          },
        ],
      },
    ],
  },
];

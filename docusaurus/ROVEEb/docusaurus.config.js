const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'ROVEEb',
  tagline: 'Um mundo de conhecimentos',
  url: 'https://roveeb.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'roveeb', // Usually your GitHub org/user name.
  projectName: 'roveeb-wiki', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://gitlab.com/roveeb/roveeb-wiki/-/tree/main/docusaurus/ROVEEb',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://gitlab.com/roveeb/roveeb-wiki/-/tree/main/docusaurus/ROVEEb/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      
      navbar: {
        title: 'ROVEEb',
        //  logo: {
        //    alt: 'ROVEEb Logo',
        //    src: 'img/logo.svg',
        //  },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Tutoriais',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/apoie', label: 'Apoiar', position: 'left' },
          {
            href: 'https://gitlab.com/roveeb/roveeb-wiki',
            label: 'GitLab',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentações',
            items: [
              {
                label: 'Tutoriais',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Comunidade',
            items: [
              {
                label: 'Youtube',
                href: 'https://youtube.com/ROVEEb',
              },
              {
                label: 'Discord',
                href: 'https://discord.gg/WmpW72Y',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/roveeb',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/mateusrovedaa',
              },
            ],
          },
          {
            title: 'Mais',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/Roveeb',
              },
              {
                label: 'GitLab',
                href: 'https://gitlab.com/roveeb/',
              },
              {
                label: 'Facebook',
                href: 'https://facebook.com/roveebcanal',
              },
              {
                label: 'Instagram',
                href: 'https://instagram.com/roveebcanal',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} ROVEEb. Construído com Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});

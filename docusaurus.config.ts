import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import securityHeadersPlugin from './src/plugins/security-headers';

const config: Config = {
  title: 'Mykhailo Ovdiienko',
  tagline: 'Technical Writer',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://movdia.github.io',
  baseUrl: '/movdia/',

  organizationName: 'movdia',
  projectName: 'movdia',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    securityHeadersPlugin,
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
      },
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl: 'https://github.com/movdia/movdia/tree/master/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    metadata: [
      {name: 'keywords', content: 'technical writer, documentation, portfolio, Mykhailo Ovdiienko'},
      {name: 'author', content: 'Mykhailo Ovdiienko'},
    ],
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'Mykhailo Ovdiienko',
      hideOnScroll: true,
      items: [
        {to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$'},
        {to: '/portfolio', label: 'Portfolio', position: 'left'},
        {
          type: 'docSidebar',
          sidebarId: 'samplesSidebar',
          position: 'left',
          label: 'Writing Samples',
        },
        {
          href: 'https://github.com/movdia',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Navigation',
          items: [
            {label: 'Home', to: '/'},
            {label: 'Portfolio', to: '/portfolio'},
            {label: 'Writing Samples', to: '/docs/intro'},
          ],
        },
        {
          title: 'Connect',
          items: [
            {label: 'GitHub', href: 'https://github.com/movdia'},
            {label: 'LinkedIn', href: 'https://linkedin.com/in/placeholder'},
          ],
        },
      ],
      copyright: `Copyright ${new Date().getFullYear()} Mykhailo Ovdiienko. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml', 'markdown'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;

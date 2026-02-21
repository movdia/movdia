import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  samplesSidebar: [
    'intro',
    {
      type: 'category',
      label: 'API Reference',
      items: ['api-documentation/sample-api'],
    },
    {
      type: 'category',
      label: 'Support & Onboarding',
      items: ['markdown-samples/getting-started'],
    },
    {
      type: 'category',
      label: 'Technical Guides',
      items: ['technical-guides/deployment-guide'],
    },
  ],
};

export default sidebars;

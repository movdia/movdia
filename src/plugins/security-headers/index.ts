import type { LoadContext, Plugin } from '@docusaurus/types';

export default function securityHeadersPlugin(
  _context: LoadContext,
  _options: unknown,
): Plugin {
  const isDev = process.env.NODE_ENV === 'development';

  return {
    name: 'security-headers-plugin',
    injectHtmlTags() {
      return {
        headTags: [
          {
            tagName: 'meta',
            attributes: {
              'http-equiv': 'Content-Security-Policy',
              content: [
                "default-src 'self'",
                `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
                "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
                "font-src 'self' https://fonts.gstatic.com",
                "img-src 'self' data: https:",
                isDev ? "connect-src 'self' ws:" : "connect-src 'self'",
                // frame-ancestors is not supported in meta tags; enforced via HTTP headers only (_headers file)
              ].join('; '),
            },
          },
          {
            tagName: 'meta',
            attributes: {
              'http-equiv': 'X-Content-Type-Options',
              content: 'nosniff',
            },
          },
          {
            tagName: 'meta',
            attributes: {
              name: 'referrer',
              content: 'strict-origin-when-cross-origin',
            },
          },
          {
            tagName: 'meta',
            attributes: {
              'http-equiv': 'Permissions-Policy',
              content:
                'camera=(), microphone=(), geolocation=(), interest-cohort=()',
            },
          },
        ],
      };
    },
  };
}

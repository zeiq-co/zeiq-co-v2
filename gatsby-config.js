const config = require('./src/utils/config.js');

module.exports = {
  siteMetadata: {
    title: config.siteName,
    author: config.author,
    description: config.description,
    siteUrl: config.siteUrl,
  },
  plugins: [
    // {
    //   resolve: `gatsby-source-filesystem`,
    //   options: {
    //     name: `posts`,
    //     path: `${__dirname}/src/content/posts/`,
    //   },
    // },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-169811954-1',
        head: false,
        anonymize: true,
        respectDNT: true,
        exclude: ['/preview/**', '/do-not-track/me/too/'],
        pageTransitionDelay: 0,
        optimizeId: 'YOUR_GOOGLE_OPTIMIZE_TRACKING_ID',
        experimentId: 'YOUR_GOOGLE_EXPERIMENT_ID',
        variationId: 'YOUR_GOOGLE_OPTIMIZE_VARIATION_ID',
        defer: false,
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: 'commbus.netlify.app/',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: config.googleAnalytics,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.siteName,
        short_name: config.siteName,
        start_url: config.siteUrl,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        icon: './static/images/logo-1024.png',
      },
    },
    `gatsby-plugin-offline`,
  ],
};

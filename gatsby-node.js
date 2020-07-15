const path = require('path');

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructuring the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allSanityWork {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityArticle {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
      allSanityService {
        edges {
          node {
            slug {
              current
            }
          }
        }
      }
    }
  `);
  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }
  result.data.allSanityWork.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug.current}`,
      component: path.resolve(`./src/template/app-project.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityArticle.edges.forEach(({ node }) => {
    createPage({
      path: `blog/${node.slug.current}`,
      component: path.resolve(`./src/template/blogArticle.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
  result.data.allSanityService.edges.forEach(({ node }) => {
    createPage({
      path: `/${node.slug.current}`,
      component: path.resolve(`./src/template/single-service.js`),
      context: {
        slug: node.slug.current,
      },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
  });
};

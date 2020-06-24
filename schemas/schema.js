// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import siteSettings from './siteSettings';
import hireUs from './hireUs';
import process from './process';
import news from './news';
import clientReview from './clientReview';
import work from './work';
import aboutProject from './aboutProject';
import service from './service';
import article from './article';
// import technology from './technology';
import tab from './tab';
import alternative from './alternative';
// import seoTool from './seoTool';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    siteSettings,
    process,
    news,
    clientReview,
    work,
    service,
    article,
    // technology,
    // seoTool,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    hireUs,
    aboutProject,
    tab,
    alternative,
  ]),
});

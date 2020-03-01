// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';

// We import object and document schemas
import blockContent from './blockContent';
import category from './category';
import galleryPage from './galleryPage';
import page from './page';
import vehicleHirePage from './vehicleHirePage';
import siteSettings from './siteSettings';
import settingsFeatures from './settingsFeatures';
import settingsFeaturesItem from './settingsFeaturesItem';
import settingsVehicleFeature from './settingsVehicleFeature';
import settingsVehicleFeatureItem from './settingsVehicleFeatureItem';
import settingsSlider from './settingsSlider';
import settingsSliderItem from './settingsSliderItem';
import pageSimpleStage from './pageSimpleStage';
import pageSimpleStageItem from './pageSimpleStageItem';
import pageGallery from './pageGallery';
import pageGalleryItem from './pageGalleryItem';
import gallery from './gallery';
import galleryImage from './galleryImage';
import vehicleInformation from './vehicleInformation';
import vehicleInformationItem from './vehicleInformationItem';
import vehicleFeatureItem from './vehicleFeatureItem';
import vehicleFeature from './vehicleFeature';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    // The following are document types which will appear
    // in the studio.
    page,
    galleryPage,
    category,
    vehicleHirePage,
    siteSettings,
    settingsFeatures,
    settingsFeaturesItem,
    settingsVehicleFeature,
    settingsVehicleFeatureItem,
    settingsSlider,
    settingsSliderItem,
    pageSimpleStage,
    pageSimpleStageItem,
    pageGallery,
    pageGalleryItem,
    gallery,
    galleryImage,
    vehicleInformation,
    vehicleInformationItem,
    vehicleFeature,
    vehicleFeatureItem,

    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
  ]),
});

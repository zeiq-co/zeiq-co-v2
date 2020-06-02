import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset-advanced';
import { darken } from 'polished';

const mainBrandColor = '#634ce9';
const lightShades = '#acb6bd';
const darkAccent = 'rgb(139, 153, 163)';
const darkShades = '#262a2c';

export const theme = {
  // It can be liberally applied to your layout as its main identity.
  mainBrandColor,
  // Accent colors can be used to bring attention to design elements
  // by contrasting with the rest of the palette.
  lightAccent: '#acb6bd',
  // Use this color as the background for your dark-on-light designs,
  // or the text color of an inverted design.
  lightShades,
  // Another accent color to consider. Not all colors have to be used -
  // sometimes a simple color scheme works best.
  darkAccent,
  // Use as the text color for dark-on-light designs,
  // or as the background for inverted designs.
  darkShades,
  primaryColor: mainBrandColor,
  borderColor: '#e0e6ef',
  backgroundColor: '#e0e0e0',
  backgroundInputColor: lightShades,
  backgroundInputColorDark: darkShades,
  fontSize: 16,
  fontSizeSmall: 14,
  fontSizeExtraSmall: 12,
  fontSizeMedium: 18,
  fontSizeLarge: 22,
  textColor: darkShades, // '#262a2c',
  textColorLite: darkAccent, // 'rgb(139, 153, 163)',
  textColorInverse: lightShades,
  menuTintColor: darkAccent,
  primaryFontFamily: "'Merriweather',sans-serif",
  secondaryFontFamily: "'Rubik', sans-serif",
  boxShadow: '0 15px 30px 0 rgba(139, 153, 163, 0.2)',
  secondaryBlack: '#141414',
};

const GlobalStyle = createGlobalStyle`
  ${reset};
  body {
    font-family: ${theme.secondaryFontFamily};
    color: ${theme.lightShadess};
    letter-spacing: 0.03rem !important;
    font-size: 16px;
    padding: 0rem 7rem !important;
  }
  .title {
    font-family: ${theme.primaryFontFamily};
    line-height: 62px !important;
  }
  .button {
    font-family: ${theme.primaryFontFamily};
  }
  p {
    line-height: 25px !important;
  }
  p, .title, .box {
    color: ${theme.textColor} !important;
  }

  .subtitle {
    color: ${theme.darkAccent} !important;
    line-height: 25px !important;
  }
  .button.is-primary {
    background-color: ${theme.mainBrandColor};
    transition: background-color 0.2s ease;
    :hover {
    background-color: ${darken(0.06, theme.mainBrandColor)};
    }
  }
  .button.is-secondary {
    background-color: ${theme.lightAccent};
    transition: background-color 0.2s ease;
    color: #ffffff;
    :hover {
      background-color: ${darken(0.06, theme.lightAccent)};
    }
  }
  .button.is-link {
    background-color: ${theme.mainBrandColor};
    transition: background-color 0.2s ease;
    :hover {
      background-color: ${darken(0.06, theme.mainBrandColor)};
    }
  }
  .button.is-info {
    background:transparent;
  }
  .button, .input, .card {
    box-shadow: ${theme.boxShadow};
  }
  .has-text-light {
    color: ${theme.lightAccent} !important;
  }
  .has-text-black {
    color: ${theme.textColor} !important;
  }
  .has-text-info{
    color: ${theme.mainBrandColor} !important;
  }
`;

export default GlobalStyle;

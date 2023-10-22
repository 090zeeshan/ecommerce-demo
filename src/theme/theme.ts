import {Font} from 'src/types/font';
import {ss} from './scale';

export const theme = {
  color: {
    background: 'white',
    primary: 'black',
    secondary: 'lightgray',
    accent: 'royalblue',
    body: 'gray',
  },
  font: {
    [Font.Primary]: 'SourceSansPro-Regular',
    [Font.PrimaryBold]: 'SourceSansPro-Bold',
    [Font.PrimarySemiBold]: 'SourceSansPro-SemiBold',
  },
  space: {
    x4Lg: ss(24),
    x3Lg: ss(22),
    x2Lg: ss(20),
    xLg: ss(18),
    lg: ss(16),
    md: ss(14),
    sm: ss(12),
    xSm: ss(10),
    x2Sm: ss(8),
    x3Sm: ss(6),
    x4Sm: ss(4),
  },
  text: {
    body1: {
      fontSize: ss(14),
      fontFamily: Font.Primary,
    },
    h1: {
      fontSize: ss(14),
      fontFamily: Font.PrimaryBold,
    },
    h2: {
      fontSize: ss(16),
      fontFamily: Font.PrimaryBold,
    },
  },
};

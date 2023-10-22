import {Dimensions, PixelRatio} from 'react-native';

const STANDARD_WIDTH = 375;

const {width, height} = Dimensions.get('window');

const deviceWidth = width < height ? width : height;
const scaleFactor = Math.round(deviceWidth / STANDARD_WIDTH);

export const ss = (size: number) => {
  return PixelRatio.roundToNearestPixel(scaleFactor * size);
};

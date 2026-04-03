import { View } from 'react-native';
import LiquidGlassViewNativeComponent from './LiquidGlassViewNativeComponent';
import { isLiquidGlassSupported } from './isLiquidGlassSupported';

export const LiquidGlassView = isLiquidGlassSupported
  ? LiquidGlassViewNativeComponent
  : View;

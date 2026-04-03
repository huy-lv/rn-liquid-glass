import { View } from 'react-native';
import LiquidGlassViewContainerNativeComponent from './LiquidGlassViewContainerNativeComponent';
import { isLiquidGlassSupported } from './isLiquidGlassSupported';

export const LiquidGlassContainerView = isLiquidGlassSupported
  ? LiquidGlassViewContainerNativeComponent
  : View;

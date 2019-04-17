import * as React from 'react'
import {
  RecursiveArray,
  RegisteredStyle,
  StyleProp,
  ViewStyle,
} from 'react-native'

import { IDotProps, IDotState } from './src/Dot/index'
import { IDotsProps, IDotsState } from './src/Dots/index'
import { IPageProps, IPageState } from './src/Page/index'
import { IPaginationProps, IPaginationState, TypePaginationPosition } from './src/Pagination/index'
import { IOnboardingProps, IOnboardingState, IOnboardingPage, TypeOnboardingStatusBarStyle } from './src/Onboarding/index'

/**
 * Type of component to typing components in the Input component
 */
export type TypeComponent =
  JSX.Element
  | React.ComponentClass
  | false
  | null
  | undefined

/**
 * Type to define the prop style of the Input component
 */
export type TypeStyle =
  false
  | ViewStyle
  | RegisteredStyle<ViewStyle>
  | RecursiveArray<false | ViewStyle | RegisteredStyle<ViewStyle> | null | undefined>
  | StyleProp<ViewStyle>[]
  | null
  | undefined

/**
 * Declaration for OnBoarding module
 */
declare module '@ticmakers-react-native/onboarding'

export {
  IDotProps,
  IDotState,

  IDotsProps,
  IDotsState,

  IPageProps,
  IPageState,

  IPaginationProps,
  IPaginationState,
  TypePaginationPosition,

  IOnboardingProps,
  IOnboardingState,
  IOnboardingPage,
  TypeOnboardingStatusBarStyle,
}

import * as React from 'react'
import { Animated, FlatListProps } from 'react-native'

import { TypeComponent, TypeStyle } from '@ticmakers-react-native/core'
import { IImageProps, TypeImageSource } from '@ticmakers-react-native/image'

import Onboarding, { IOnboardingPage, IOnboardingProps, IOnboardingState, TypeOnboardingStatusBarStyle } from './src/Onboarding'
import Dot, { IDotProps, IDotState } from './src/Dot'
import Dots, { IDotsProps, IDotsState } from './src/Dots'
import Page, { IPageProps, IPageState } from './src/Page'
import Pagination, { DoneButton, IPaginationProps, TypePaginationPosition, IPaginationState } from './src/Pagination'

declare module '@ticmakers-react-native/onboarding'

/**
 * Export default
 */
export default Onboarding

export {
  IOnboardingPage,
  IOnboardingProps,
  IOnboardingState,
  TypeOnboardingStatusBarStyle,

  Dot,
  IDotProps,
  IDotState,

  Dots,
  IDotsProps,
  IDotsState,

  Page,
  IPageProps,
  IPageState,

  Pagination,
  DoneButton,
  IPaginationProps,
  IPaginationState,
  TypePaginationPosition,
}

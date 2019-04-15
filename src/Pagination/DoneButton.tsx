import * as React from 'react'
import { Animated } from 'react-native'

import Button from '@ticmakers-react-native/button'
import Icon from '@ticmakers-react-native/icon'
import { TypeComponent } from './../../index'

/**
 * Class to define the component DoneButton used in Onboarding
 * @class DoneButton
 * @extends {Button}
 */
export default class DoneButton extends Button {
  /**
   * Initial value to the animation
   * @memberof DoneButton
   */
  public fadeAnimation = new Animated.Value(0)

  /**
   * Duration of the animation
   * @memberof DoneButton
   */
  public fadeDuration = 1000

  /**
   * Method that fire when the component is mounted
   * @returns {void}
   * @memberof DoneButton
   */
  public componentDidMount(): void {
    setTimeout(() => {
      Animated.timing(this.fadeAnimation, {
        duration: this.fadeDuration,
        toValue: 1,
      }).start();
    }, 1000);
  }

  /**
   * Method that renders the component
   * @returns {TypeComponent}
   * @memberof DoneButton
   */
  public render(): TypeComponent {
    const { children } = this.props

    return (
      <Animated.View style={{ opacity: this.fadeAnimation }}>
        { children &&
          <Button clear { ...this.props }>
            { children }
          </Button>
        }
        { !children && this.props.title &&
          <Button clear { ...this.props } />
        }
        { !children && !this.props.title &&
          <Button clear { ...this.props }>
            <Icon name="checkbox-marked-circle-outline" type="material-community" size={ 16 } />
          </Button>
        }
      </Animated.View>
    )
  }
}

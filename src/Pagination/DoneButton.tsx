import * as React from 'react'
import { Animated } from 'react-native'

import { TypeComponent } from '@ticmakers-react-native/core'
import Button from '@ticmakers-react-native/button'
import Icon from '@ticmakers-react-native/icon'

/**
 * Class to define the component DoneButton used in Onboarding
 * @class DoneButton
 * @extends {Button}
 */
export default class DoneButton extends Button {
  /**
   * Initial value to the animation
   */
  public fadeAnimation = new Animated.Value(0)

  /**
   * Duration of the animation
   */
  public fadeDuration = 1000

  /**
   * Method that fire when the component is mounted
   * @returns {void}
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
   */
  public render(): TypeComponent {
    return (
      <Animated.View style={{ opacity: this.fadeAnimation }}>
        { this.ButtonComponent() }
      </Animated.View>
    )
  }

  /**
   * Method that renders the button
   * @returns {TypeComponent}
   */
  public ButtonComponent(): TypeComponent {
    const { children, title } = this.props
    const props = {
      ...this.props,
      clear: true,
    }

    if (children) {
      return (
        <Button { ...props }>
          { children }
        </Button>
      )
    // tslint:disable-next-line: no-else-after-return
    } else if (!children && title) {
      return <Button { ...props } />
    }

    return (
      <Button { ...props }>
        <Icon name="checkbox-marked-circle-outline" type="material-community" size={ 30 } />
      </Button>
    )
  }
}

import * as React from 'react';
import ThemeContext from './ThemeContext';

const withTheme = (Component) => {
  return (props) => {
    return (
      <ThemeContext.Consumer>
        { (contexts) => <Component {...props} {...contexts} /> }
      </ThemeContext.Consumer>
    )
  }
}

export { withTheme } 
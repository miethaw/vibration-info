import * as React from 'react';
import ThemeContext from './ThemeContext';

const THEME = "theme"

class ThemeProvider extends React.Component {
  constructor(props) {
    super();
    this.state = {
      changeTheme: this.changeTheme,
      theme: "dark",
   
    };
    // if (props.cookies.get(THEME) !== undefined) {
    //   if (props.cookies.get(THEME) === "light") document.body.style.background = "linear-gradient(-60deg,#e6e8eA,#F6F8FA)"
    //   else document.body.style.background = "linear-gradient(-60deg, #101841,#202B60)"
    // }
  }
  // changeTheme = isDark => {
  //   this.props.cookies.set(THEME, isDark ? "dark" : "light",{path:"/"})
  //   this.setState({ theme: isDark ? "dark" : "light" });
  //   if (!isDark) document.body.style.background = "linear-gradient(-60deg,#e6e8eA,#F6F8FA)"
  //   else document.body.style.background = "linear-gradient(-60deg, #101841,#202B60)"
  // }
 
  render() {
    return (
      <ThemeContext.Provider
        value={{
          theme: this.state.theme,
          changeTheme: this.changeTheme,
       
        }}>
        {this.props.children}
      </ThemeContext.Provider>
    )
  }
}

export default (ThemeProvider)
import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // link context object to a class component
  // 'contextType' is a reserved property name
  static contextType = LanguageContext;

  render() {
    console.log(this.context)
    return (
      <button className="ui button primary">Submit</button>
    );
  }
}
export default Button;
import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
  // link context object to a class component
  // 'contextType' is a reserved property name
  static contextType = LanguageContext;

  render() {
    const text = this.context === 'english' ? 'Submit' : '提出する';
    return (
      <button className="ui button primary">{text}</button>
    );
  }
}
export default Button;
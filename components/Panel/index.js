import React, { Component } from 'react';
import { Title, Stars, Header } from './sub-components';

class Panel extends Component {
  constructor(props) {
    super(props);
  }

  static Header = Header;
  static Title = Title;
  static Stars = Stars;

  render() {
    const { children } = this.props;
    return <>{children}</>;
  }
}

export default Panel;

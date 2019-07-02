import React, { Component } from 'react';
import { Title, Stars, Header } from './sub-components';

const Panel = ({ children }) => <>{children}</>;

Panel.Header = Header;
Panel.Title = Title;
Panel.Stars = Stars;

export default Panel;

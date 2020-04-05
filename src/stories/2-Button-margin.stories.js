import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button with margin',
  component: Button,
};

export const Text = () => <div style={{margin: "10px"}}><Button onClick={action('clicked')}>Hello Button</Button></div>;


import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@storybook/react/demo';

export default {
  title: 'Button without margin',
  component: Button,
};

export const Text = () => <div><Button onClick={action('clicked')}>Hello Button</Button></div>;


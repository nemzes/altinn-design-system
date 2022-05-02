import React from 'react';

import * as tokens from '@altinn/figma-design-tokens';
import jsonTokens from '@altinn/figma-design-tokens/dist/tokens.json';

import '@altinn/figma-design-tokens/dist/tokens.css';

export interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps) => {
  return (
    <button
      style={{
        padding: 'var(--space-comfortable)',
        paddingLeft: tokens.SpaceX4,
        paddingRight: jsonTokens.space.x4.value,
      }}
    >
      {props.label}
    </button>
  );
};

export default Button;

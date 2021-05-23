import React, { ButtonHTMLAttributes } from 'react';

import './styles.css';

interface ButtonDefaultProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

const ButtonDefault: React.FC<ButtonDefaultProps> = ({ text, ...rest }) => {
  return (
    <button className="btn-default" {...rest}>
      {text}
    </button>
  );
}

export default ButtonDefault;

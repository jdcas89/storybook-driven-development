import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';


const ButtonWrapper = styled.button`
  background-color: ${props => {
    if(props.disabled){
      return 'grey';
    }
    switch (props.type) {
      case 'primary':
        return 'green';
      case 'default':
        return 'blue';
      case 'info':
        return 'yellow';
      case 'warning':
        return 'orange';
      case 'danger':
        return 'red';
      default:
        return 'blue';
    }
  }};
  font-weight:600;
  font-size:${(props) => props.theme.fontSize};
  padding:0.5em;
  color:white;
  border-radius:0.5em;
  width:${props => {
    switch (props.size) {
      case 'xs':
        return '4em';
      case 'sm':
        return '8em';
      case 'md':
        return '12em';
      case 'lg':
        return '16em';
      default:
        return '8em';
    }
  }}
`;

const Button = (props) => (<ButtonWrapper {...props}>{props.children} </ButtonWrapper>)

Button.defaultProps = {
  type: 'primary'
}

Button.propTypes = {
  //** Indicates which kind of button it is. */
  type: PropTypes.string,
}

export default Button;

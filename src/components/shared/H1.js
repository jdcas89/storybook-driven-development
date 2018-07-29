import React from 'react'
import styled from "styled-components";
import PropTypes from 'prop-types';


const H1wrapper = styled.h1`
  color:${(props) => props.theme.h1Color};
  font-size:${(props) => props.theme.h1Size};
`;

const H1 = (props) => (<H1wrapper {...props}>{props.children} </H1wrapper>)

export default H1;

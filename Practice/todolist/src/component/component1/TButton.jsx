import React from "react";
import styled, { css } from "styled-components";

const TDButton = ({ size, shape, variant, children, ...rest }) => {
    return (
        <S.Button
            {...{ size, shape, variant, children }}
            {...rest}
        >{children}</S.Button>
    )
}
export default TDButton

const variantCSS = {
    primary: css`
        background-color: green;
        color: white;
    `,
    secondary: css`
        background-color: blue;
        color: white;
    `,
    "primary-text": css`
        color: green;
        background-color: transparent;
        outline: none;
    `
}
const sizeCSS = {
    primary: css`
       padding: 16px;
    `,
    medium: css`
       padding: 16px 32px;
    `,
    full: css`
       width: 100%;
       aspect-ratio: 8 / 1 ;
    `
}
const shapeCSS = {
    shape: css`
      border-radius: 8px;
    `,
    round: css`
      border-radius: 50%;
    `,
}

const Button = styled.button`  
        ${(props) => variantCSS[props.variant]}
        ${(props) => sizeCSS[props.variant]}
        ${(props) => shapeCSS[props.variant]}
`

const S = {
    Button
}


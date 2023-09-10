import styled from "styled-components";

export const Title = styled.h2`
    color: ${props => props.color || '#EB9B00'};
    font-size: ${props => props.fontSize || '18px'};
    text-align: ${props => props.alignText || 'center'};
    width: 100%;
    `
    
    // border-top-radius: 100%;
// ${props => borderType(props.alignText)}
// text-align: ${props => borderType(props.alignText) || 'center'};
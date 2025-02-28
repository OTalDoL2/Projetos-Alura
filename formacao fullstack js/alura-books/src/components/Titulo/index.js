import styled from "styled-components";

export const Title = styled.h2`
    color: ${props => props.color || '#EB9B00'};
    font-size: ${props => props.fontSize || '36px'};
    text-align: ${props => props.alignText || 'center'};
    width: 100%;
    `
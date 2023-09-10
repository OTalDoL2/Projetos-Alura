import styled from "styled-components";

// function borderType(borderSize){
//     if (borderSize == 1) {
//         return ""
//     }
// }

export const Title = styled.h2`
    color: ${props => props.color || '#EB9B00'};
    font-size: ${props => props.fontSize || '18px'};
    text-align: ${props => props.alignText || 'center'};
    width: 100%;
    `
    // text-align: ${props => borderType(props.alignText) || 'center'};
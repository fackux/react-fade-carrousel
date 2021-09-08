import styled from 'styled-components'

export const FixedContainer = styled.div`
    cursor: pointer;
    position: relative;
    height: ${props => props.height};
    background-color: #ccc;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
`;

export const Image = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;
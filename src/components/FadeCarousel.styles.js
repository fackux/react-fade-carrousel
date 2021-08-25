import styled from 'styled-components'

export const FixedContainer = styled.div`
    position: relative;
    height: 380px;
    background-color: #ccc;
    background-image: url(${props => props.src});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
    overflow: hidden;
    max-width: 768px;
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
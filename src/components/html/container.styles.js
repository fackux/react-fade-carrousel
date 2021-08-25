import styled from 'styled-components'

export const Container = styled.div`
        width: 1040px;
        background-color: yellow;

`

export const GaleriaWrapper = styled.div`
    width: 100%;
    background-color: red;
    position: relative;
`

export const StyledGaleria = styled.div`
    width: 100%;
    height: 359px;
    position: absolute;
    top: 0px;
    left: 0px;
    overflow: hidden;
    background-color:red;
`

export const StyledImage = styled.div`
    width: 100%;
    height: 359px;
    background-size: 100% auto;
    background-repeat: no-repeat;
    background-position: center center;
    background-image: url(${({ image }) => image});
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: ${({ zIndex }) => 9999 - zIndex}
`;
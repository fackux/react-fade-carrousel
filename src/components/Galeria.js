import React, { useState, useEffect } from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Container, GaleriaWrapper, StyledGaleria, StyledImage } from './html/container.styles'

const MyGaleria = (props) => {
    const { items } = props

    const [showGalleries, setShowGalleries] = useState(false)

    useEffect(() => {
        console.log(showGalleries)
        setTimeout(() => {
            setShowGalleries(!showGalleries)
        },3000)
    },[showGalleries])

    return (
        <Container>
            <GaleriaWrapper>
                <StyledGaleria {...props}>
                    <TransitionGroup>
                        {items.map((item, index) => (
                            <CSSTransition
                                key={index}
                                timeout={300}
                                className="my-node"
                                classNames="my-node"
                                in={showGalleries}
                                >
                                <StyledImage image={item.url730x532} zIndex={index} />
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </StyledGaleria>
            </GaleriaWrapper>
        </Container>
    )
}

export default MyGaleria

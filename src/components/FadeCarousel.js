import React from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

import { FixedContainer, Image } from './FadeCarousel.styles';
import useCarousel from '../hooks/useCarousel';

const FadeCarousel = (props) => {
    const { pictures } = props;

    const {
        state,
        hovered,
        setHovered,
        nextImg
    } = useCarousel(pictures)

    return (
        <FixedContainer
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            src={pictures[state.active].resizeUrl1200x1200}
        >
            {
                pictures.map((p, i) => {
                    return (
                        <CSSTransition
                            key={i}
                            timeout={3000}
                            classNames="my-node"
                            mountOnEnter

                            in={state.show[i] && hovered}
                            onEntered={() => { nextImg() }}
                            onExit={() => { }}
                        >
                            <Image alt="" className="my-node" src={p.resizeUrl1200x1200} />
                        </CSSTransition>

                    )
                })
            }
        </FixedContainer>
    )
}

FadeCarousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default FadeCarousel;

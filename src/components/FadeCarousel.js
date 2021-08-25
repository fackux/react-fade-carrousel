import React from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

import { FixedContainer, Image } from './FadeCarousel.styles';
import useCarousel from '../hooks/useCarousel';

import '../styles/animations.config.css'

const FadeCarousel = (props) => {
    const { postingId, pictures, height} = props;

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
            height={height}
        >
            {
                pictures.map((picture, index) => {
                    return (
                        <CSSTransition
                            key={`pic_${postingId}_${index}`}
                            timeout={3000}
                            classNames="re-fade-carousel"
                            mountOnEnter
                            unmountOnExit
                            in={state.show[index] && hovered}
                            onEntered={() => { nextImg() }}
                        >
                            <Image alt="" className="re-fade-carousel" src={picture.resizeUrl1200x1200} />
                        </CSSTransition>

                    )
                })
            }
        </FixedContainer>
    )
}

FadeCarousel.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default FadeCarousel;

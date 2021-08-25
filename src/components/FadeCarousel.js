import React from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

import { FixedContainer, Image } from './FadeCarousel.styles';
import useCarousel from '../hooks/useCarousel';

import '../styles/animations.config.css'

const FadeCarousel = (props) => {
    const { postingId, pictures } = props;

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
                pictures.map((picture, i) => {
                    return (
                        <CSSTransition
                            key={`pic_${postingId}_${i}`}
                            timeout={3000}
                            classNames="re-fade-carousel"
                            mountOnEnter

                            in={state.show[i] && hovered}
                            onEntered={() => { nextImg() }}
                            onExit={() => { }}
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

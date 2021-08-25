import React, { useEffect, useReducer, useState } from 'react'
import { CSSTransition } from 'react-transition-group'

import { FixedContainer, Image } from './styles';

import POSTINGS from '../../postings.json'

const showReducer = (state, { type, payload }) => {
    switch (type) {
        case 'CHANGE_IMG':
            let _show = Array(state.show.length).fill(false);
            _show[payload] = true
            return { active: payload, show: _show };
        default:
            return { ...state };
    }
}

const Prueba = () => {
    const { pictures } = POSTINGS.visiblePictures//resizeUrl1200x1200

    const [hovered, setHovered] = useState(false)

    const [state, dispatch] = useReducer(showReducer, { active: 0, show: Array(pictures.length).fill(false) })

    const changeImg = (index) => dispatch({ type: 'CHANGE_IMG', payload: index })

    const nextImg = () => {
        const next = state.active + 1;
        if (next >= pictures.length) {
            changeImg(0)
        } else {
            changeImg(next)
        }
    }

    useEffect(() => {
        changeImg(0)
    }, [])

    // useEffect(() => {
    //     if (!hovered) {
    //         changeImg(0)
    //     }
    // }, [hovered])

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

export default Prueba

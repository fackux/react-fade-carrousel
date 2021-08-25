import { useEffect, useReducer, useState } from 'react'

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

const useCarousel = (pictures, config) => {
    const reset = config?.reset || false

    const initialState = {
        active: 0,
        show: Array(pictures.length).fill(false)
    }

    const [hovered, setHovered] = useState(false)

    const [state, dispatch] = useReducer(showReducer, initialState)

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

    useEffect(() => {
        if (!hovered && reset) {
            changeImg(0)
        }
    }, [hovered, reset])

    return {
        state, // {active: boolean, show: boolean[]}
        hovered,
        setHovered,
        changeImg,
        nextImg
    }
}

export default useCarousel

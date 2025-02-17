import { useLayoutEffect } from 'react'
import { useSwiper } from 'swiper/react'

const ModalSkipToActive = ({ active }: { active: number }) => {
    const swiper = useSwiper();
    useLayoutEffect(() => {
        swiper.slideTo(active)
    }, [active, swiper])
    return (
        <></>
    )
}

export default ModalSkipToActive
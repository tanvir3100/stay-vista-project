/* eslint-disable react/prop-types */
import Heading from '../Shared/Header'

const Header = ({ room }) => {
    console.log(room)
    return (
        <>
            <Heading title={room?.title} subtitle={room?.location} />
            <div className='w-full md:h-[60vh] overflow-hidden rounded-xl'>
                <img
                    className='object-cover w-full'
                    src={room?.image}
                    alt='header image'
                />
            </div>
        </>
    )
}

export default Header
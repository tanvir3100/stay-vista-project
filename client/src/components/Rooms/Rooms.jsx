/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Card from "./Card";
import Container from "../Shared/Container";
import { useSearchParams } from "react-router-dom";
import Heading from "../Shared/Header";
import Loader from "../Shared/Loader";


const Rooms = () => {
    const [rooms, setRooms] = useState([]);
    const [params, SetParams] = useSearchParams();
    const [loading, setLoader] = useState(false);
    const category = params.get('category');

    useEffect(() => {
        setLoader(true)
        fetch('../../../public/rooms.json')
            .then(res => res.json())
            .then(data => {
                if (category) {
                    const filter = data.filter(room => room.category === category)
                    setRooms(filter)
                }
                else setRooms(data)

                setLoader(false)
            })

    }, [category])

    if (loading) return <Loader />
    return (
        <Container>
            {
                rooms && rooms.length > 0 ? (<div className="pt-4 
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 
                2xl:grid-cols-6 
                gap-5">
                    {
                        rooms.map(room => <Card key={room._id} room={room} />)
                    }
                </div>) : (
                    <div className="flex justify-center items-center min-h-[calc(100vh-300px)]">
                        <Heading
                            center
                            title='No Rooms Available In this Category'
                            subtitle='Please Select Other Category' />
                    </div>
                )
            }
        </Container>
    );
};

export default Rooms;  
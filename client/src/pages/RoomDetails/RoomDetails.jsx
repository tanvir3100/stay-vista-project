import { useParams } from "react-router-dom";
import Container from "../../components/Shared/Container";
import { useEffect, useState } from "react";
import Loader from "../../components/Shared/Loader";
import { Helmet } from "react-helmet-async";
import Header from "../../components/RoomDetails/Header";



const RoomDetails = () => {
    const { id } = useParams();
    const [room, setRoom] = useState();
    const [loading, setLoading] = useState();

    useEffect(() => {
        setLoading(true)
        fetch('https://raw.githubusercontent.com/shakilahmedatik/stay-vista-resources/main/data/rooms.json')
            .then(res => res.json())
            .then(data => {
                const singleRoom = data.find(room => room._id === id)
                setRoom(singleRoom)
                setLoading(false)
            })

    }, [id])

    if (loading) return <Loader />

    return (
        <Container>
            <Helmet>
                <title>{room?.title}</title>
            </Helmet>
            <div className="">
                <div>
                    {/* header section */}
                    <Header room={room}/>
                </div>
                <div>
                    {/* Room Info */}
                </div>
                {/* calendar */}
            </div>
        </Container>
    );
};

export default RoomDetails;
import { useEffect, useState } from "react";
// import { getFbData, getIdData, userLogout } from "../../config/firebasemethods";
import { useNavigate } from "react-router-dom";
// import BSScreenHeadercar from "../../component/BSScreenHeadercar";
// import BSButton from "../../component/BSButton";
import { useSelector } from "react-redux";
// import Card from "../../component/Card";
import { Container } from "react-bootstrap";
import { getIdData, userLogout } from "../../config/firebasemethods";
import BSScreenHeadercar from "../../components/BSScreenHeadercar";
import BSButton from "../../components/BSButton";
import Card from "../../components/Card";
import CircularProgress from '@mui/material/CircularProgress';


export default function Cars() {
    const dataFromRedux = useSelector((a) => a.Login);
    console.log(dataFromRedux);
    const [listData, setListData] = useState([]);
    const [loader, setLoader] = useState(false)

    

    let getdata = () => {
        setLoader(true)
        getIdData("cars", dataFromRedux.id)
            .then((res) => {
                console.log(res)
                const newArray = Object.values(res).map(obj => ({
                    ac: obj.ac,
                    bluetooth: obj.bluetooth,
                    carName: obj.carName,
                    cost: obj.cost,
                    description: obj.description,
                    gps: obj.gps,
                    id: obj.id,
                    image: obj.image,
                    modelname: obj.modelname,
                    usbPort: obj.usbPort,
                    userName: obj.userName,
                    userid: obj.userid,
                    available: obj.available
                }))

                console.log(newArray);
                setListData(newArray);
                setLoader(false)
            })
            .catch((err) => {
                console.log('no data found')
                setLoader(false)
            });
    };

    useEffect(() => {
        getdata();
    }, []);
    console.log(listData)

    let nav = useNavigate()

let logout = () => {
    userLogout()
    .then((res) => {
        console.log("Logged out")
        nav("/")
    }).catch((err) => {
        console.log(err)
    })
}

    return <>
        <BSScreenHeadercar title="Transporter Portal"
            firstSidebutton={<BSButton title="Logout" variant="contained" onClick={logout} />} 
            secondSidebutton={<BSButton title="Add" variant="contained" onClick={() => nav('/addcars')} />}
            thirdSidebutton={<BSButton title="Bookings" variant="contained" onClick={() => nav('/booking')} /> } />
        <Container>
        {loader ? <div>
            <h1>Loading...</h1>
            </div> :
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
            {listData.map((x, i) => {
                return (
                    <Card title={x.carName} src={x.image} price={x.cost}
                    // btnvalue={() => getProduct(x)}
                    />
                )
            })}
        </div>}
        </Container>
    </>
}
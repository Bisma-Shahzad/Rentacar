import { Container } from "react-bootstrap";
// import BSInput from "../../component/BSInput";
// import BSDatePicker from "../../component/BSDatePicker";
import { Typography } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import BSInput from "../../components/BSInput";
import BSDatePicker from "../../components/BSDatePicker";
import BSButton from "../../components/BSButton";
import BSDateTimePicker from "../../components/BSDateTimePicker";
import { useState } from "react";
import { postFbData, postFbDatacustomer } from "../../config/firebasemethods";
import BSScreenHeader from "../../components/BSScreenHeader";
// import BSDateTimePicker from "../../component/BSDateTimePIcker";

export default function BookNow() {
    const location = useLocation()
    console.log(location.state)
    let data = location.state
    const dataFromRedux = useSelector((a) => a.Login);
    console.log(dataFromRedux);
    const [bookedData, setBookedData] = useState({ac : data.ac, 
        available: data.available,
        bluetooth: data.bluetooth,
        carName: data.carName,
        cost: data.cost,
        description: data.description,
        gps: data.gps,
        id: data.id,
        image: data.image,
        modelname: data.modelname,
        usbPort: data.usbPort,
        userName: data.userName,
        userid: data.userid,
        customerid: dataFromRedux.id,
        customeruserName: dataFromRedux.userName,
    })
        console.log(bookedData)
    
    let nav = useNavigate()
    
    // setBookedData({...bookedData, data: data})
    // console.log(bookedData)
    let confirmcar = () => {
        console.log(bookedData)
        if (!bookedData.startlocation || !bookedData.endlocation ) {
            alert("Please fill all the required inputs");
        } else {
        postFbDatacustomer("customerbooking", bookedData)
        .then((res) => {
            console.log(res);
            postFbData("transporterbooking", bookedData)
                .then((res) => {
                    console.log(res);
                    nav('/home')
                })
                .catch((err) => {
                    console.log(err);
                });
        })
        .catch((err) => {
            console.log(err);
        });
}
    }

    return <>
        <Container>
            <BSScreenHeader />
            <div style={{ marginTop: '20px' }}>
                <img src={data.image} style={{ width: '300px' }} />
            </div>
            <div>
                <Typography variant="h4" style={{ textTransform: 'uppercase', padding: '5px' }} >{data.carName}</Typography>
                {/* <h1>{location.state.carName}</h1> */}
                <h5 style={{ padding: '5px' }}>Model: {data.modelname}</h5>
                <p style={{ padding: '5px' }}>{data.description}</p>
            </div>
            <div style={{ marginTop: '20px', padding: '5px' }}>
                <h3 style={{ textDecoration: 'underline' }}>Features</h3>
                <div style={{ display: 'flex' }}>
                    <h5>AC</h5>
                    <h5 >{!data.ac ? <CloseIcon style={{ color: 'red' }} /> : <DoneIcon style={{ color: 'green' }} />}</h5>
                </div>
                <div style={{ display: 'flex', }}>
                    <h5>GPS</h5>
                    <h5>{!data.gps ? <CloseIcon style={{ color: 'red' }} /> : <DoneIcon style={{ color: 'green' }} />}</h5>
                </div>
                <div style={{ display: 'flex', }}>
                    <h5>Bluetooth</h5>
                    <h5>{!data.bluetooth ? <CloseIcon style={{ color: 'red' }} /> : <DoneIcon style={{ color: 'green' }} />}</h5>
                </div>
                <div style={{ display: 'flex', }}>
                    <h5>USB Port</h5>
                    <h5>{!data.usbPort ? <CloseIcon style={{ color: 'red' }} /> : <DoneIcon style={{ color: 'green' }} />}</h5>
                </div>
            </div>
            <div style={{ padding: '5px' }}>
                <h3>Availability</h3>
                <h5>{data.available}</h5>
            </div>
            <div>
                <h4 style={{ color: 'blue', padding: '5px' }}>Cost: {data.cost}</h4>
            </div>
            <div>
                <div style={{ display: 'flex', margin: '20px' }}>
                    <BSInput label="Starting Location" onChange={(e) => setBookedData({...bookedData, startlocation: e.target.value})} />
                    <BSInput label="Ending Location" onChange={(e) => setBookedData({...bookedData, endlocation: e.target.value})} />
                </div>
            </div>


            {/* <div style={{ margin: '20px' }}>
                <BSDatePicker label="Date of Booking" defaultvalue='2022-05-14'  onChange={(e) => setBookedData({...bookedData, dateofbooking: e.target.value})} />
            </div>


            


            <div style={{ display: 'flex', margin: '20px' }}>
                <BSDateTimePicker label="Rent Booking Starting Time" defaultValue="2022-02-17T12:00" onChange={(e) => setBookedData({...bookedData, startdate: e.target.value})} />
                <BSDateTimePicker label="Rent Booking Ending Time" defaultValue="2022-02-17T12:00" onChange={(e) => setBookedData({...bookedData, enddate: e.target.value})}/>
            </div> */}
            <div style={{ marginTop: '20px', padding: '5px' }}>
                <h3 style={{ textDecoration: 'underline' }}>Cancelation Policy</h3>
                <p style={{ padding: '5px' }}>You can cancel your booking from Profile</p>
            </div>
            <div style={{ margin: '20px',  }}>
                <BSButton
                    title="CONFIRM BOOKING" variant="contained" size="small" onClick={confirmcar} />
            </div>
        </Container>

    </>
}
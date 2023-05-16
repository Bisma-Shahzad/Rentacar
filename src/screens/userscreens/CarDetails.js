import { useLocation, useNavigate } from "react-router-dom"
import { Typography } from "@mui/material"
import { Container } from "react-bootstrap"
// import BSButton from "../../component/BSButton"
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import BSButton from "../../components/BSButton";
import BSScreenHeader from "../../components/BSScreenHeader";

export default function CarDetails() {
    const location = useLocation()
    console.log(location.state)
    let data = location.state
    let nav = useNavigate()

    let bookcar = () => {
        nav('/booknow', {
            state: data
        })
        console.log(data)
    }

    return (<div>
        <Container>
            <BSScreenHeader title="Details" />
            <div style={{ marginTop: '20px' }}>
                <img src={data.image} style={{ width: '1000px' }} />
            </div>
            <div>
                <Typography variant="h3" style={{   textTransform: 'uppercase', }} >{data.carName}</Typography>
                {/* <h1>{location.state.carName}</h1> */}
                <h5>Model: {data.modelname}</h5>
                <p>{data.description}</p>
            </div>
            <div style={{marginTop: '20px'}}>
                <h3 style={{textDecoration: 'underline'}}>Features</h3>
                <div style={{ display: 'flex'}}>
                    <h5>AC</h5>
                    <h5 >{!data.ac ? <CloseIcon style={{color: 'red'}} />:<DoneIcon style={{color: 'green'}} />}</h5>
                    </div>
                    <div style={{ display: 'flex', }}>
                    <h5>GPS</h5>
                    <h5>{!data.gps ? <CloseIcon style={{color: 'red'}} />:<DoneIcon style={{color: 'green'}} />}</h5>
                    </div>
                    <div style={{ display: 'flex', }}>
                    <h5>Bluetooth</h5>
                    <h5>{!data.bluetooth ? <CloseIcon style={{color: 'red'}} />:<DoneIcon style={{color: 'green'}} />}</h5>
                    </div>
                    <div style={{ display: 'flex', }}>
                    <h5>USB Port</h5>
                    <h5>{!data.usbPort ? <CloseIcon style={{color: 'red'}} />:<DoneIcon style={{color: 'green'}} />}</h5>
                </div>
            </div>
            <div>
                <h4 style={{ color: 'blue', }}>Cost: {data.cost}</h4>
            </div>
            <div>
                <h3>Review and Ratings</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', }}>
                    <Typography variant="h6" style={{ textAlign: 'center', }}  >NO REVIEWS</Typography>
                </div>
            </div>
            <div>
                <h3>Availability</h3>
                <h5>{data.available}</h5>

            </div>
            <div style={{marginTop: '20px'}}>
            <BSButton
                title="BOOK NOW" variant="contained" size="small" onClick={bookcar} />
            </div>
        </Container>
    </div>)
}
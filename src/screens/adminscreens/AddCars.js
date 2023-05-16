import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { postFbData } from "../../config/firebasemethods";
import { Container } from "react-bootstrap";
// import BSScreenHeader from "../../component/BSScreenheader";
import { Box, Grid, Typography } from "@mui/material";
// import BSInput from "../../component/BSInput";
// import BSSwitch from "../../component/BSSwitch";
// import BSButton from "../../component/BSButton";
import { useSelector } from "react-redux";
import { postFbData } from "../../config/firebasemethods";
import BSScreenHeader from "../../components/BSScreenHeader";
import BSInput from "../../components/BSInput";
import BSSwitch from "../../components/BSSwitch";
import BSButton from "../../components/BSButton";

export default function AddCars() {
    const dataFromRedux = useSelector((a) => a.Login);
    const [model, setModel] = useState({
        ac: false,
        gps: false,
        bluetooth: false,
        usbPort: false,
        userid: dataFromRedux.id,
        userName: dataFromRedux.userName,
    })
    let nav = useNavigate()

    let add = () => {
        console.log(model)
        if (!model.carName || !model.modelname || !model.image || !model.cost || !model.description || !model.available) {
            alert("Please fill all the required inputs");
        } else {
            postFbData("cars", model)
                .then((res) => {
                    console.log(res);
                    nav('/cars')
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    }
    return <>
        <Container>
            <div style={{ marginTop: '20px' }}>
                <BSScreenHeader title="Cars Form" />
            <div style={{textAlign: 'center'}}>
                <h1>Car Form</h1>
            </div>
            <Grid container spacing={2}>

                <Grid item xs={12} sm={6}>
                    <Box
                    >
                        <BSInput
                            onChange={(e) => setModel({ ...model, carName: e.target.value })}
                            variant="outlined"
                            label="Car Name"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box >
                        <BSInput
                            onChange={(e) => setModel({ ...model, modelname: e.target.value })}
                            variant="outlined"
                            label="Model"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>

                <Grid item xs={12} sm={6}>
                    <Box >
                        <BSInput
                            onChange={(e) => setModel({ ...model, image: e.target.value })}
                            variant="outlined"
                            label="Image"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box >
                        <BSInput
                            onChange={(e) => setModel({ ...model, cost: e.target.value })}
                            variant="outlined"
                            label="Cost"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Box >
                        <BSInput
                            onChange={(e) => setModel({ ...model, available: e.target.value })}
                            variant="outlined"
                            label="Availability"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                </Grid>
            </Grid>




            <Box style={{ textAlign: 'center', margin: '5px' }}>
                <Typography variant="h4">Features</Typography>
            </Box>
            <div style={{ display: 'grid', gridTemplateColumns: "1fr 1fr 1fr 1fr" }}>
                <Box className="p-3">
                    <BSSwitch label="AC" onChange={(e) => setModel({ ...model, ac: e.target.checked })} />
                </Box>

                <Box className="p-3">
                    <BSSwitch label="GPS" onChange={(e) => setModel({ ...model, gps: e.target.checked })} />
                </Box>

                <Box className="p-3">
                    <BSSwitch label="Bluetooth" onChange={(e) => setModel({ ...model, bluetooth: e.target.checked })} />
                </Box>

                <Box className="p-3">
                    <BSSwitch label="USB Port" onChange={(e) => setModel({ ...model, usbPort: e.target.checked })} />
                </Box>
            </div>
            <Grid>
                <Grid item xs={12} sm={6}>
                    <Box className="p-3">
                        <BSInput
                            onChange={(e) => setModel({ ...model, description: e.target.value })}
                            variant="outlined"
                            label="Description"
                            fullWidth={true}
                            size="Normal"
                            required={true} />
                    </Box>
                    </Grid>
                </Grid>
                <div style={{ textAlign: 'center' }}>
                    <BSButton title="Add Car" variant="contained" onClick={add} />
                </div>
            </div>
        </Container>
    </>
}
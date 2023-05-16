import { useState } from "react";
import { signUpUser } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";
import { Box, TextField, Typography } from "@mui/material";
import { Button } from "react-bootstrap";
import BSSelect from '../components/BSSelect';
import BSButton from "../components/BSButton";

function Signup() {
    const [model, setModel] = useState({});
    let nav = useNavigate()

    let createUser = () => {
        console.log(model);
        if (!model.userName || !model.confirmPassword || !model.contact || !model.email || !model.password ) {
            alert("Please fill all the required inputs");
        } else {
            signUpUser(model)
                .then((res) => {
                    console.log(res);
                    nav('/')
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    };

    return (
        <>
            <Box
                sx={{ height: "100vh" }}
                className="d-flex justify-content-center align-items-center "
            >
                <Box>
                    <Typography variant="h3">Signup</Typography>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, userName: e.target.value })}
                            variant="standard"
                            label="Name"
                        />
                    </Box>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, email: e.target.value })}
                            variant="standard"
                            label="Email"
                        />
                    </Box>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, password: e.target.value })}
                            variant="standard"
                            label="Password"
                            type="password"
                        />
                    </Box>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, confirmPassword: e.target.value })}
                            variant="standard"
                            label="Confirm Password"
                            type="password"
                        />
                    </Box>
                    <Box className="p-2">
                        <TextField
                            onChange={(e) => setModel({ ...model, contact: e.target.value })}
                            variant="standard"
                            label="Contact"
                        />
                    </Box>

                    <Box
                    // className="p-3"
                    >
                        < BSSelect label="User Type" minWidth='200px'
                            searchList={
                                [
                                    {
                                        displayName: "Transporter",
                                        key: 1,
                                    },
                                    {
                                        displayName: "User",
                                        key: 2,
                                    },
                                ]} selectedval={(selectVal) => {
                                    setModel({ ...model, instituteType: selectVal })
                                }}
                                />
                    </Box>
                    {/* </Grid>
                    </Grid> */}
                    <Box className="p-2">
                        {/* <<Button
                            onClick={createUser}
                            variant="contained">
                            Signup
                        </Button>> */}
                        <BSButton variant="contained" onClick={createUser} title="Signup" />
                    </Box>
                </Box>
            </Box>
        </>
    );
}
export default Signup;
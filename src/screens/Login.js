// import { Button, TextField, Typography } from "@mui/material";
// import { Box } from "@mui/system";
// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { loginTransporter, loginUser } from "../config/firebasemethods";
import { useDispatch } from "react-redux";
import { add } from "../config/redux/reducer/loginslice";

import { useState } from "react";
import { loginTransporter, loginUser } from "../config/firebasemethods";
import { useNavigate } from "react-router-dom";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";

function Login() {
    const [model, setModel] = useState({});
    const dispatch = useDispatch();
    let signIn = () => {
        loginUser(model)
            .then((res) => {
                console.log(res);
                let id = res.id
                let userName = res.userName
                console.log(id)
                dispatch(
                    add({
                        id: id,
                        userName: userName,
                    })
                );
                nav('home')
            })
            .catch((err) => {
                console.log(err);
                loginTransporter(model)
                    .then((res) => {
                        console.log(res)
                        let id = res.id
                        let userName = res.userName
                        dispatch(
                            add({
                                id: id,
                                userName: userName,
                            })
                        );
                        nav('cars')
                    }).catch((error) => {
                        console.log(error)
                    })
            });
    };

    let nav = useNavigate()

    return (
        <>
            <Box
                sx={{ height: "100vh" }}
                className="d-flex justify-content-center align-items-center "
            >
                <Box>
                    <Typography variant="h3">Login</Typography>
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
                        <Button
                            onClick={signIn}
                            variant="contained">
                            Login
                        </Button>
                    </Box>
                    <Box className="p-2">
                        <Typography>Don't have an account <Button
                            onClick={() => nav('/signup')}>
                            SignUp
                        </Button></Typography>

                    </Box>
                </Box>
            </Box>
        </>
    );
}
export default Login;
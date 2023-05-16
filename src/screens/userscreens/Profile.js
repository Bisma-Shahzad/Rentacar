import { Container } from "react-bootstrap";
import BSScreenHeader from "../../components/BSScreenHeader";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getprofileData, userLogout } from "../../config/firebasemethods";
import { useNavigate } from "react-router-dom";
import BSButton from "../../components/BSButton";

export default function Profile(){
    const dataFromRedux = useSelector((a) => a.Login);
    console.log(dataFromRedux);
    const [listData, setListData] = useState([]);
    const [loader, setLoader] = useState(false)

    

    let getdata = () => {
        setLoader(true)
        getprofileData("users", 'User', dataFromRedux.id)
            .then((res) => {
                console.log(res)
                setListData(res);
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
        <Container>
            <BSScreenHeader title="Profile"
                firstSidebutton={<BSButton title="Logout" variant="contained" onClick={logout} />}
                />
                <h1>User Name: {dataFromRedux.userName}</h1> 

                </Container>
    </>
}
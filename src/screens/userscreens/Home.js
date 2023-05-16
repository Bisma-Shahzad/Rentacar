// import Card from "../../components/card";
import { Box } from "@mui/material";
import { Container } from "react-bootstrap";
// import Searchbar from "../../component/Searchbar";
// import BSScreenHeadercar from "../../component/BSScreenHeadercar";
// import BSButton from "../../component/BSButton";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
// import { getData, getIdData, userLogout } from "../../config/firebasemethods";
import { useEffect, useState } from "react";
import { getIdData, userLogout } from "../../config/firebasemethods";
import BSScreenHeadercar from "../../components/BSScreenHeadercar";
import BSButton from "../../components/BSButton";
import UserCard from "../../components/UserCard";
import SearchBargpt from "../../components/searchbargpt";
// import UserCard from "../../component/UserCard";
// import SearchBargpt from "../../component/searchbargpt";
import CircularProgress from '@mui/material/CircularProgress';



export default function Home() {
    const [listData, setListData] = useState([]);
    const [searchProd, setSearchProd] = useState('');
    const [loader, setLoader] = useState(false)


    let nav = useNavigate()
    const dataFromRedux = useSelector((a) => a.Login);
    console.log(dataFromRedux);

    let getdata = () => {
        setLoader(true)
        getIdData("cars", '')
            .then((res) => {
                console.log(res)
                const result = Object.values(res).flatMap((value) =>
                    Object.values(value)
                        .map(({
                            ac, bluetooth, carName, cost, description, gps, id, image, modelname, usbPort, userName, userid, available
                        }) => ({
                                ac, bluetooth, carName, cost, description, gps, id, image, modelname, usbPort, userName, userid, available
                            }))
                );

                console.log(result);
                setListData(result);
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


    let logout = () => {
        userLogout()
            .then((res) => {
                console.log("Logged out")
                nav("/")
            }).catch((err) => {
                console.log(err)
            })
    }

    const handleSearch = (text) => {
        setSearchProd(text)
    };

    const getProduct = (e) => {
        nav('/cardetails', {
            state: e
        })
        console.log(e)
    }

    return <>
        <Container>
            <BSScreenHeadercar title="Rent A Car"
                firstSidebutton={<BSButton title="Logout" variant="contained" onClick={logout} />}
                secondSidebutton={<BSButton title="Profile" variant="contained" onClick={() => nav('/profile')} />} 
                />
            <Box style={{ marginTop: '10px' }}>
                <SearchBargpt label="Search cars" onSearch={handleSearch} />
            </Box>
            {loader ? <div>
                <h1>Loading...</h1>
            </div> :
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', }}>
                {listData.filter((x) => x.carName.toLowerCase().includes(searchProd)).map((x, i) => {
                    return (
                        <UserCard title={x.carName} src={x.image} price={x.cost}
                            onClick={() => getProduct(x)}
                        />
                    )
                })}
            </div>}
        </Container>
    </>
}
                        // .filter((x) => x.title.toLowerCase().includes(searchProd))
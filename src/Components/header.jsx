import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";
import { useDispatch } from 'react-redux'
import { fetchData } from '../Redux/action'

const Header = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event) => {
        setSearchValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchData(searchValue));
        navigate("/home")
    };

    return (
        <Paper component="form" sx={styles.paper} onSubmit={handleSubmit}>
            <IconButton sx={styles.iconButton} aria-label="menu">
                <MenuIcon />
            </IconButton>
            <InputBase
                sx={styles.inputBase}
                placeholder="Search Google Maps"
                inputProps={{
                    "aria-label": "search google maps",
                }}
                value={searchValue}
                onChange={handleInputChange}
            />
            <IconButton type="submit" sx={styles.inputIcon} aria-label="search">
                <SearchIcon />
            </IconButton>
            <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
            <IconButton color="primary" sx={styles.inputIcon} aria-label="directions">
                <DirectionsIcon />
            </IconButton>
        </Paper>
    );
};

const styles = {
    paper: {
        padding: "5px 4px",
        display: "flex",
        alignItems: "center",
        marginTop : 1
    },
    iconButton: {
        padding: "10px",
    },
    inputBase: {
        marginLeft: 1,
        flex: 1,
        justifyContent: "center",
    },
    inputIcon: {
        padding: "10px",
    },
};

export default Header;

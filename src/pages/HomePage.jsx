import React from 'react';
import styles from "./HomePage.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import videoIntro from "../video/videoIntro.mp4"
import { Button, InputAdornment, MenuItem, TextField } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { OutlinedInput } from '@mui/material';
import Title from '../components/Title';
import ItemPlace from '../components/ItemPlace';

export default function HomePage() {
    const months = [
        {
            value: 'USD',
            label: '$',
        },
        {
            value: 'EUR',
            label: '€',
        },
        {
            value: 'BTC',
            label: '฿',
        },
        {
            value: 'JPY',
            label: '¥',
        },
    ]
    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <video src={videoIntro} autoPlay loop muted alt="Not found" />
                <div className={styles.headerNavbar}>
                    <div className={styles.logo}>
                        <a href="/" >
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png" alt="Not found" />
                        </a>
                    </div>
                    <div className={styles.options}>
                        <MenuIcon />
                        <ShoppingCartOutlinedIcon />
                    </div>
                </div>
                <div className={styles.headerContent}>
                    <Title
                        title="Where do you want to go?"
                        description="Trips, experiences, and places. All in one service."
                    ></Title>
                    <OutlinedInput
                        className={styles.inputHeader}
                        size='small'
                        placeholder="Destination, city"
                        endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                        fullWidth
                    />
                    <TextField
                        className={styles.inputHeader}
                        size="small"
                        select
                        defaultValue="EUR"
                        endAdornment={<InputAdornment position="end">ufnjdis</InputAdornment>}
                        fullWidth
                    >
                        {months.map((option) => (
                            <MenuItem key={option.value} value={option.value}
                            >{option.label}</MenuItem>))}
                    </TextField>
                    <TextField
                        className={styles.inputHeader}
                        size="small"
                        select
                        defaultValue="EUR"
                        endAdornment={<InputAdornment position="end">ufnjdis</InputAdornment>}
                        fullWidth

                    >
                        {months.map((option) => (
                            <MenuItem key={option.value} value={option.value}
                            >{option.label}</MenuItem>))}
                    </TextField>
                    <Button variant="contained" fullWidth>Search</Button>
                </div>
            </div>
            <div className={styles.body}>
                <div className={styles.popular}>
                    <Title
                        title="Popular Destinations"
                        description="World's best tourise destinations"
                    />
                    <Grid className={styles.place} container spacing={2}>
                        <Grid xs={12} md={3}>
                            <ItemPlace
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Tokyo_Dollarphotoclub_72848283-copy-700x466.jpg"
                                place="Tokyo"
                            />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemPlace
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/bf1202aedf2c5b6a57d379575619a488-700x466.jpg"
                                place="Seoul"
                            />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemPlace
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/1600x1200-4-700x466.jpg"
                                place="Paris"
                            />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <ItemPlace
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-1-700x466.jpg"
                                place="London"
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div >
    )
}

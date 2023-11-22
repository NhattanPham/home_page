import React, { useEffect, useState } from 'react';
import styles from "./HomePage.module.scss";
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import videoIntro from "../assest/videoIntro.mp4";
import data from "../assest/data.json"
import { Button, InputAdornment } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { OutlinedInput } from '@mui/material';
import Title from '../components/Title';
import ItemPlace from '../components/ItemPlace';
import ItemValueTrip from '../components/ItemValueTrip';
import ItemArticles from '../components/ItemArticles';
import { Drawer } from '@mui/material';
import {
    ShoppingCartOutlined,
    PhoneAndroid,
    LocationOnOutlined,
    AccessAlarmOutlined,
    KeyboardArrowUp,
    KeyboardArrowDown,
    CalendarMonth,
    Sort,
    Star,
    StarBorder,
    Facebook,
    Twitter,
    YouTube,
    Pinterest,
    Instagram,
    Settings,
    FavoriteBorder
} from '@mui/icons-material';
import facebookIcon from "../assest/facebook.png";
import twitterIcon from "../assest/twitter.png";
import youtubeIcon from "../assest/youtube.png";
import pinterestIcon from "../assest/pinterest.png";
import instagramIcon from "../assest/instagram.png";
import SelectCustom from '../components/SelectCustom';
import ItemMenu from '../components/ItemMenu';


export default function HomePage() {
    const [colorT, setColor] = useState(false);
    const [isShowAdvanced, setIsShowAdvanced] = useState(false);
    const [isShowDrawer, setShowDrawer] = useState(false);
    const [isShowMore, setIsShowMore] = useState(false);
    const [isShowSideBar,setIsShowSideBar] = useState(false)
    const [isAnimation,setAnimation] = useState(false)
    const [windownWidth,setWindownWidth] = useState(getWindownWidth())
    const [dataOptions, setDataOptions] = useState("Home");
    const changeColor = () => {
        if (window.scrollY > 200) {
            setColor(true)
        } else {
            setColor(false)
        }
    }
    const showAdvanceSearch = () => {
        if (isShowAdvanced) {
            setIsShowAdvanced(false)
        } else {
            setIsShowAdvanced(true)
        }
    }
    window.addEventListener("scroll", changeColor);
    window.addEventListener("resize",setIsAnimationF)
    function getWindownWidth(){
        return window.innerWidth
    }
    function setIsAnimationF(){
        if(windownWidth<905){
            setAnimation(false)
        }
    }
    useEffect(()=>{
        function handleResize(){
            setWindownWidth(getWindownWidth())
        }
        
        window.addEventListener("resize",handleResize)
        
        return ()=>
        window.removeEventListener("resize",handleResize)
    
    })
    // window.addEventListener("resize",setWidth(window.innerWidth))
    // 
    console.log(window.scrollY)
    return (
        <div className={styles.wrapper}>
            <div className={colorT ? styles.headerNavbarRoll : styles.headerNavbar}>
                <div className={styles.logo}>
                    <a href="/" >
                        {colorT ? <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x.png" alt="Not found" /> :
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/images/logo@2x_white.png" alt="Not found" />}

                    </a>
                </div>
                <div className={styles.options}>
                    <div className={styles.listMenu}>
                        {data.ListItem.map((value) =>
                        <span key={value}>
                            <ItemMenu
                                
                                className={styles.itemMenu}
                                title={value}
                                listOption={data[`${value}`]}
                            /></span>)}
                    </div>
                    <MenuIcon onClick={() => setShowDrawer(true)} />
                    <span style={{ position: 'relative' }}>
                        <ShoppingCartOutlined style={{ marginLeft: '10px' }} />
                        <span className={styles.numCart}>0</span>
                    </span>


                </div>
            </div>
            <div className={styles.header}>
                <video src={videoIntro} autoPlay loop muted alt="Not found" />

                <div className={styles.headerContent}>
                    <Title
                        title="Where do you want to go?"
                        description="Trips, experiences, and places. All in one service."
                    ></Title>
                    <Grid style={{ width: '100%' }} container spacing={1}>
                        <Grid xs={12} md={3}>
                            <OutlinedInput
                                className={styles.inputHeader}
                                size='small'
                                placeholder="Destination, city"
                                endAdornment={<InputAdornment position="end"><SearchIcon /></InputAdornment>}
                                fullWidth
                            />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <SelectCustom list={data.months} icon={<CalendarMonth />} />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <SelectCustom list={data.sort} icon={<Sort />} />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <Button className={styles.buttonSearch} variant="contained" fullWidth>Search</Button>
                        </Grid>
                    </Grid>
                    {isShowAdvanced ? <Grid style={{ width: '100%', marginTop: '8px' }} container spacing={1}>
                        <Grid xs={12} md={3}>
                            <SelectCustom list={data.categories} icon={<KeyboardArrowDown />} />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <SelectCustom list={data.detinations} icon={<KeyboardArrowDown />} />
                        </Grid>
                        <Grid xs={12} md={3}>
                            <OutlinedInput
                                className={styles.inputHeader}
                                size='small'
                                placeholder="Max budget ex. 500"
                                endAdornment={<InputAdornment position="end">$</InputAdornment>}
                                fullWidth
                            />
                        </Grid>
                        <Grid className={styles.spaceItem} xs={12} md={3}>
                        </Grid>
                    </Grid> : <></>}

                    <div
                        style={{ width: "96%" }}
                    >
                        <div onClick={showAdvanceSearch} className={styles.advancedSearch}>
                            {isShowAdvanced ? <KeyboardArrowUp /> : <KeyboardArrowDown />}
                            <p>Advanced Search</p></div>
                    </div>
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
                <div className="valueTrip">
                    <Title
                        title="Best Value Trips"
                        description="Best offers trips from us"
                    />
                    <Grid className={styles.place} container spacing={2}>
                        <Grid xs={12} md={4}>
                            <ItemValueTrip
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-211051-700x466.jpeg"
                                beforePrice=""
                                price="5,000"
                                place="French Autumn"
                                city="City Tours, Urban"
                                numStar={4}
                                dayBefore={5}
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <ItemValueTrip
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-197657-700x466.jpeg"
                                beforePrice=""
                                price="6,000"
                                place="Grand Switzerland"
                                city="Shopping, Moutain, Snow & Ice"
                                numStar={4}
                                dayBefore={6}
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <ItemValueTrip
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-96420-700x466.jpeg"
                                beforePrice="3,000"
                                price="2,500"
                                place="Dsicover Japan"
                                city="City Tours, Iconic"
                                numStar={4}
                                dayBefore={5}
                                isSale={true}
                            />
                        </Grid>
                    </Grid>
                </div>
                <div className={styles.reason}>
                    <Title
                        title="Why Choose Us"
                        description="Here are reasons you should plan trip with us"
                    />
                    <Grid container spacing={2}>
                        <Grid xs={12} md={4}>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Map-Marker-300x300.png" alt="Not found" />
                            <Title
                                title="Handpicked Hotels"
                                description="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Worldwide-Location-300x300.png" alt="Not found" />
                            <Title
                                title="World Class Service"
                                description="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/Hot-Air-Balloon-300x300.png" alt="Not found" />
                            <Title
                                title="Best Price Guarantee"
                                description="Lorem ipsum dolor sit amet, consect adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa"
                            />
                        </Grid>
                    </Grid>
                </div>
                <img className={styles.imgagebridge} src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24377.jpg" alt="Not found" />
                <div className={styles.articles}>
                    <Title
                        title="Articles & Tips"
                        description="Explore some of the best tips from around the world"
                    />
                    <Grid container spacing={2}>
                        <Grid xs={12} md={4}>
                            <ItemArticles
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/photo-1469920783271-4ee08a94d42d-960x636.jpg"
                                time="DECEMBER 10, 2016"
                                title="Memorial Day to Someone Told Me to Travel"
                                content="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <ItemArticles
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-212388-960x636.jpeg"
                                time="DECEMBER 10, 2016"
                                title="7 Tips For Nomads On A Budget Trips"
                                content="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
                            />
                        </Grid>
                        <Grid xs={12} md={4}>
                            <ItemArticles
                                imageURL="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/pexels-photo-24484-960x636.jpg"
                                time="DECEMBER 10, 2016"
                                title="Taking A Travel Blog Victory Lap"
                                content="Meh synth Schlitz, tempor duis single-origin coffee ea next level ethnic fingerstache..."
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
            <div className={styles.footer}>
                <Grid container spacing={2}>
                    <Grid className={styles.awards} xs={12} md={4}>
                        <h3>Our Awards</h3>
                        <p>Our Awards
                            London is a megalopolis of people, ideas and frenetic energy. The capital and largest city of the United Kingdom.</p>
                        <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/uploads/2016/12/awards.png" alt="Not found" />
                    </Grid>
                    <Grid xs={12} md={4}>
                        <h3>Contact Info</h3>
                        <p><PhoneAndroid style={{ fontSize: '16px' }} /> 1-567-124-44227</p>
                        <p><LocationOnOutlined style={{ fontSize: '16px' }} /> 184 Main Street East Perl Habour 8007</p>
                        <p><AccessAlarmOutlined style={{ fontSize: '16px' }} /> Mon - Sat 8.00 - 18.00 Sunday CLOSED</p>
                        <div className={styles.listIcon}>
                            <img src={facebookIcon} alt="Not found" />
                            <img src={twitterIcon} alt="Not found" />
                            <img src={youtubeIcon} alt="Not found" />
                            <img src={pinterestIcon} alt="Not found" />
                            <img src={instagramIcon} alt="Not found" />
                        </div>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <h3>Reecnt Trips</h3>
                        <ul className={styles.listRecent}>
                            <li>
                                <a href="/">
                                    <img src="https://live.staticflickr.com/8688/28760131762_e4a64b20c4_q.jpg" alt="Not found" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://live.staticflickr.com/7519/27308262031_a6ebf0572e_q.jpg" alt="Not found" />
                                </a>
                            </li>
                            <li >
                                <a href="/">
                                    <img src="https://live.staticflickr.com/7160/27287965356_60355f51d7_q.jpg" alt="Not found" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://live.staticflickr.com/7365/27138570412_d25002a5c9_q.jpg" alt="Not found" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://live.staticflickr.com/7543/26520497604_1df03a02bc_q.jpg" alt="Not found" />
                                </a>
                            </li>
                            <li>
                                <a href="/">
                                    <img src="https://live.staticflickr.com/7502/27012097142_f1511b67bc_q.jpg" alt="Not found" />
                                </a>
                            </li>
                        </ul>
                    </Grid>
                </Grid>
                <div className={styles.footerOption}>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/">Tours</a>
                        </li>
                        <li>
                            <a href="/">Blog</a>
                        </li>
                        <li>
                            <a href="/">Purchase Theme</a>
                        </li>
                    </ul>
                    <p>© Copyright Grand Tour Theme Demo - Theme by ThemeGoods</p>
                </div>
            </div>
            <Drawer anchor='right' open={isShowDrawer} onClose={() => {
                setIsShowMore(false)
                setShowDrawer(false)
            }}>
                <div className={styles.drawerNav}>
                    <button onClick={() => {
                        setShowDrawer(false)
                        setIsShowMore(false)
                    }}>X</button>
                    {isShowMore ?
                        <div className={styles.animationMoreOption}>
                            <div className={styles.back} onClick={() => setIsShowMore(false)}>{`< Back`}</div>
                            <ul>
                                {data[`${dataOptions}`].ListItem.map((e) =>
                                    <li key={e}><a href="/#"><h2>{e}</h2></a>
                                        {data[`${dataOptions}`][`${e}`] ? data[`${dataOptions}`][`${e}`].map((value) =>
                                            <ul><li><h3>{value}</h3></li></ul>
                                        ) : <></>}
                                    </li>)}
                            </ul> </div> :
                        <div >
                            <ul className={styles.animationOption}>
                                {data["ListItem"].map((e) =>
                                    <li key={e}><a href="/#"
                                        onClick={() => {
                                            setDataOptions(e)
                                            setIsShowMore(true)
                                        }}
                                    ><h2>{e}</h2></a></li>
                                )}
                            </ul>
                        </div>
                    }
                    <ul className={styles.listImage}>
                        <li className={styles.firstItem}>
                            <div className={styles.prices}>
                                $ 3,900
                            </div>
                            <h3>Swiss Alps Trip</h3>
                            <ul className={styles.listStar}>
                                <li className={styles.itemStar}>
                                    <Star fontSize='small' />
                                </li>
                                <li className={styles.itemStar}>
                                    <Star fontSize='small' />
                                </li>
                                <li className={styles.itemStar}>
                                    <Star fontSize='small' />
                                </li>
                                <li className={styles.itemStar}>
                                    <Star fontSize='small' />
                                </li>
                                <li className={styles.itemStar}>
                                    <StarBorder fontSize='small' />
                                </li>
                            </ul>
                        </li>
                        <li className={styles.secondItem}>
                            <div className={styles.prices}>
                                <p>$4,900</p>
                                <p>$4,200</p>
                            </div>
                            <h3>5 Lake of Fuji San</h3>
                            <ul className={styles.listStar}>
                                <li className={styles.itemStar}>
                                    <Star fontSize='small' />
                                </li>
                                <li className={styles.itemStar}>
                                    <Star fontSize='small' />
                                </li>
                                <li className={styles.itemStar}>
                                    <Star fontSize='small' />
                                </li>
                                <li className={styles.itemStar}>
                                    <Star fontSize='small' />
                                </li>
                                <li className={styles.itemStar}>
                                    <StarBorder fontSize='small' />
                                </li>
                            </ul>
                        </li>
                    </ul>
                    <div className={styles.listIcon}>
                        <Facebook style={{ fontSize: '30px' }} />
                        <Twitter style={{ fontSize: '30px' }} />
                        <YouTube style={{ fontSize: '30px' }} />
                        <Pinterest style={{ fontSize: '30px' }} />
                        <Instagram style={{ fontSize: '30px' }} />
                    </div>
                </div>
            </Drawer>
            <div  className={isAnimation ?`${styles.sideBaroptions} ${isShowSideBar?styles.showSidebar:styles.hideSidebar}`:styles.sideBaroptions}>
                <ul className={styles.listOption}>
                    <li style={{cursor:"pointer"}}
                        onClick={()=>{
                            setAnimation(true)
                            setIsShowSideBar(!isShowSideBar)
                        }
                        }
                    >
                        <Settings />
                    </li>
                    <li>
                        <FavoriteBorder/>
                    </li>
                    <li>
                        <ShoppingCartOutlined/>
                    </li>
                </ul>
                <div className={styles.sideBar}>
                    <h4 >Created With Grand Tour</h4>
                    <div >
                        We designed Grand Tour theme to make it works especially for tour &amp; travel site. Here are a few included examples that you can import with one click.
                    </div>
                    <ul className={styles.listImage}>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling1.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/demo2.jpg" alt="" />
                        </li>
                    </ul>
                    <h4>Predefined Colors</h4>
                    <ul className={styles.listColor}>
                        <li style={{backgroundColor:"#FF4A52"}}></li>
                        <li style={{backgroundColor:"#FF9500"}}></li>
                        <li style={{backgroundColor:"#FFCC00"}}></li>
                        <li style={{backgroundColor:"#4CD964"}}></li>
                        <li style={{backgroundColor:"#5AC8FA"}}></li>
                        <li style={{backgroundColor:"#007AFF"}}></li>
                        <li style={{backgroundColor:"#5856D6"}}></li>
                        <li style={{backgroundColor:"#FF2D55"}}></li>
                    </ul>
                    <h4>Predefined Stylings</h4>
                    <ul className={styles.listImage}>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling1.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling2.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling1.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling4.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling5.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling6.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling7.jpg" alt="" />
                        </li>
                        <li>
                            <img src="https://themes-themegoods.b-cdn.net/grandtour/demo/wp-content/themes/grandtour/cache/demos/customizer/screenshots/styling8.jpg" alt="" />
                        </li>
                    </ul>
                </div>
            </div>
            {window.scrollY>200?<div onClick={()=>{
                window.scrollTo({top: 0, left: 0, behavior: 'smooth' })
            }} className={styles.moveTop}>
                <KeyboardArrowUp/>
            </div>:<></>}
            
        </div >
    )
}

import React from "react";
import "./styles.css";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

//For Parrallax Effect
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./styles.css"; // Tell webpack that Button.js uses these styles

//For media players
import ReactPlayer from 'react-player';

/* STYLES */
//Styles for tabs
const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    '& > span': {
      width: '90%',
      backgroundColor: '#ac0c34',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    color: 'white',
    fontSize: theme.typography.pxToRem(20),
    marginRight: theme.spacing(1),
    '&:focus': {
      color: '#ac0c34'
      
    },
    '&:hover': {
      opacity: .9,
    },
  },
}))((props) => <Tab {...props} />);


//Media options

const bandcampAlbums = [
  {
    name: "Dotzd - Fantasia (2018)",
    albumcode: "3427377961"
  },
  {
    name: "Dotzd - Soñar (2016)",
    albumcode: "784210837"
  },
  {
    name: "Dotzd - Reveries (2014)",
    albumcode: "2859234241"
  }
]

const youtubeVideos = [
  {
    name: "Endless en Sesiones Sonoras (2019)",
    url: "https://www.youtube.com/watch?v=zU8eAtVPP-w&ab_channel=Dep%C3%B3sitoSonoro"
  },
  {
    name: "Vinnum Sabbathi en Sesiones Sonoras (2019)",
    url: "https://www.youtube.com/watch?v=T-EbsA1RVjc&ab_channel=Dep%C3%B3sitoSonoro"
  },
  {
    name: "Muuk en Sesiones Sonoras (2020)",
    url: "https://www.youtube.com/watch?v=xL8ETsjZtGs&ab_channel=Dep%C3%B3sitoSonoro"
  }
]



export default function App() {

  /* MENU STUFF */
  //Navbar web
  const [sectionSel, setSectionSel] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSectionSel(newValue);
  };
  /* -- */

  //For managing the parallax 
  let parallax

  /*Bandcamp ALBUM manage */
  const [bcAlbum,setBcAlbum] = React.useState(bandcampAlbums[0]);
  //For oculting bc when changing
  const [bcAlbumTransition,setBcAlbumTransition] = React.useState(false);

  const handleChangeBCAlbum = (event) => {
    let selection = bandcampAlbums.findIndex(element => element.name === event.target.value);
    setBcAlbum(bandcampAlbums[selection]);
    setBcAlbumTransition(true)
    setTimeout(() => setBcAlbumTransition(false), 600);
  };
  //For the next and previous arrows
  const [actNumBCAlbum,setActNumBCAlbum] = React.useState(0);
  const handleArrowBCAlbum = (dir) => {
    let albumsLength = bandcampAlbums.length;
    if(dir==="der"){
      if(actNumBCAlbum === albumsLength-1){
        setBcAlbum(bandcampAlbums[0]);
        setActNumBCAlbum(0)
      }
      else{
        setBcAlbum(bandcampAlbums[actNumBCAlbum+1]);
        setActNumBCAlbum(actNumBCAlbum+1)
      }
    }
    if(dir==="izq"){
      if(actNumBCAlbum === 0){
        setBcAlbum(bandcampAlbums[albumsLength-1]);
        setActNumBCAlbum(albumsLength-1)
      }
      else{
        setBcAlbum(bandcampAlbums[actNumBCAlbum-1]);
        setActNumBCAlbum(actNumBCAlbum-1)
      }
    }
    //For the transition when changing album
    setBcAlbumTransition(true)
    setTimeout(() => setBcAlbumTransition(false), 600);
  }
  


  /*YOUTUBE VIDEO MANAGING*/
  const [ytVideo,setYtVideo] = React.useState(youtubeVideos[0]); 
  //For oculting youtube when changing
  const [ytVideoTransition,setYtVideoTransition] = React.useState(false);
  const handleChangeYTVideo = (event) => {
    let selection = youtubeVideos.findIndex(element => element.name === event.target.value);
    setYtVideo(youtubeVideos[selection]);
    setYtVideoTransition(true)
    setTimeout(() => setYtVideoTransition(false), 100);
  };
  //For the next and previous arrows
  const [actNumYTVideo,setActNumYTVideo] = React.useState(0);
  const handleArrowYTVideo = (dir) => {
    let videosLength = youtubeVideos.length;
    if(dir==="der"){
      if(actNumYTVideo === videosLength-1){
        setYtVideo(youtubeVideos[0]);
        setActNumYTVideo(0)
      }
      else{
        setYtVideo(youtubeVideos[actNumYTVideo+1]);
        setActNumYTVideo(actNumYTVideo+1)
      }
    }
    if(dir==="izq"){
      if(actNumYTVideo === 0){
        setYtVideo(youtubeVideos[videosLength-1]);
        setActNumYTVideo(videosLength-1)
      }
      else{
        setYtVideo(youtubeVideos[actNumYTVideo-1]);
        setActNumYTVideo(actNumYTVideo-1)
      }
    }
    //For the transition when changing album
    setYtVideoTransition(true)
    setTimeout(() => setYtVideoTransition(false), 100);
  }
  

 
  return (
    <div>
      {/* Floating menu*/}
      <div id="flotante">
        <Hidden smDown>
          <StyledTabs
            value={sectionSel}
            onChange={handleChange}
            centered
            textcolor="primary"
          >
            <StyledTab
              label="Acerca de"
              onClick={() => parallax.scrollTo(0)}
              
            />
            <StyledTab
              label="Servicios"
              onClick={() => parallax.scrollTo(1)}
            />
            <StyledTab
              label="Live Sessions"
              onClick={() => parallax.scrollTo(2)}
            />
          </StyledTabs>
        </Hidden>
      </div>

      {/* Parallax page*/}
      <Parallax pages={3.4} ref={(ref) => (parallax = ref)}>

        {/* First Section*/}
        <ParallaxLayer offset={.2} speed={3}>
          <div id="fondo1"/>
        </ParallaxLayer>

        <ParallaxLayer offset={.13} speed={-4}>
          <div id="tit1"><h2>Acerca </h2></div>
        </ParallaxLayer>

        <ParallaxLayer offset={.35} speed={.1}>
          <div id="fondo1der">
            <div class="centeredtext">
              Estudio DIY móvil <br/>Grabación, mezcla y masterización a precios accesibles
            </div>
          </div>
        </ParallaxLayer>

        {/* Section 2 */}
        
        <ParallaxLayer offset={1.09} speed={.4}>
          {/*BANDCAMP */}
          <div id="tit2"><h2>Portafolio</h2>
            {bcAlbumTransition ? <div class="bandcampPlayerTransition"/>
              : null
            }
            
            <iframe class="bandcampPlayer" src={`https://bandcamp.com/EmbeddedPlayer/album=${bcAlbum.albumcode}/size=large/bgcol=333333/linkcol=ffffff/transparent=true/`} seamless></iframe> 
            
            <div class="roundbutton izqbutton" onClick={() => handleArrowBCAlbum("izq")}>
              <div class="flecha rotate"></div>
            </div>
            <div class="roundbutton derbutton" onClick={() => handleArrowBCAlbum("der")}>
              <div class="flecha"></div>
            </div>
            <div id="bcSelection">
              <TextField
                  select
                  id = "bcAlbumSelect"
                  label="Lista de trabajos"
                  value={bcAlbum} 
                  helperText="Selecciona algún trabajo"
                  onChange={handleChangeBCAlbum} 
                  variant="filled"
                >
                  {bandcampAlbums.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
          </div>
          
        </ParallaxLayer>
        
        <ParallaxLayer offset={.9} speed={1}>
          <div class="fondoTarjetaSec2"></div>
          
        </ParallaxLayer>
        <ParallaxLayer offset={.6} speed={1}>
          <div class="fondoTarjetaSec2"></div>
          
        </ParallaxLayer>

        
        {/* Section 3 */}


        <ParallaxLayer offset={2} speed={0}>
          <div id="fondoSec3">
            
          </div>
        </ParallaxLayer>

        <ParallaxLayer offset={2.09} speed={-2}>
        <div id="tit2der"><h2>Live Sesions</h2>
            {ytVideoTransition ? <div class="youtubePlayerTransition"/>
              : null
            }
            
            <ReactPlayer url={ytVideo.url} />
            <div class="roundbutton izqbutton" onClick={() => handleArrowYTVideo("izq")}>
              <div class="flecha rotate"></div>
            </div>
            <div class="roundbutton derbutton" onClick={() => handleArrowYTVideo("der")}>
              <div class="flecha"></div>
            </div>
            <div id="youtubeSelection">
              <TextField
                  select
                  id = "ytVideoSelect"
                  label="Lista de sesiones"
                  value={ytVideo} 
                  helperText="Selecciona alguna sesión"
                  onChange={handleChangeYTVideo} 
                  variant="filled"
                >
                  {youtubeVideos.map((option) => (
                    <MenuItem key={option.name} value={option.name}>
                      {option.name}
                    </MenuItem>
                  ))}
                </TextField>
              </div>
          </div>
        </ParallaxLayer>


        {/*Footer*/}
        <ParallaxLayer offset={3} speed={0}>
          <div id="headFooter">
            </div>
          <div id="fondoFooter">
          </div>
        </ParallaxLayer>

      </Parallax>  
    </div>
  );
}

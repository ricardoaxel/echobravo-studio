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
//For Parrallax Effect
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import "./styles.css"; // Tell webpack that Button.js uses these styles



//Tema
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




export default function App() {

  //MENU STUFF
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  //Navbar mobile
  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1
    },
    menuButton: {
      marginRight: theme.spacing(2)
    },
    title: {
      flexGrow: 1
    }
  }));

  //Navbar web
  const [sectionSel, setSectionSel] = React.useState(0);

  const handleChange = (event, newValue) => {
    setSectionSel(newValue);
  };

  //Render
  const classes = useStyles();


  //For managing the scroll
  const [scrollInY, setScrollInY] = React.useState(window.pageYOffset);

  const handleScroll = () => {
    console.log(window.scrollY)
  }

  let parallax
  return (
    <div onScroll={handleScroll}>
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
                label="Portafolio"
                onClick={() => parallax.scrollTo(1)}
              />
              <StyledTab
                label="Precios"
                onClick={() => parallax.scrollTo(2)}
              />
            </StyledTabs>
        </Hidden>
      </div>

      <Parallax pages={3.4} ref={(ref) => (parallax = ref)}>
        <div>
          <Drawer
            anchor={"left"}
            open={state["left"]}
            onClose={toggleDrawer("left", false)}
          >
            {list("left")}
          </Drawer>
        </div>
          {/*Background layers*/}
          <ParallaxLayer offset={2} speed={0}>
            <div id="fondoSec3">

            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={3} speed={0}>
            <div id="headFooter">
              </div>
            <div id="fondoFooter">

            </div>
          </ParallaxLayer>


          {/* end background*/}

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

        
        <ParallaxLayer offset={1.09} speed={.2}>
          <div id="tit2"><h2>Grabaciones</h2></div>
        </ParallaxLayer>

        <ParallaxLayer speed={-0.2} offset={2}>
        <div class="centeredtext">
                Estudio DIY móvil <br/>Grabación, mezcla y masterización a precios accesibles
              </div>
        </ParallaxLayer>
      </Parallax>
      
      
  </div>
  );
}

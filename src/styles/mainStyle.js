import { colors } from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const useStyle = makeStyles((theme) => ({
    myContainer:{
      display:'flex',
      maxWidth:'100vw',
      height:'100vh',
      alignItems:'flex-start',
      justifyContent: 'center',
      backgroundColor:'#21242b',
    },
    headerText:{
        padding:0,
        textAlign:'center',
        color:'#ffffff',
        marginBottom: '60px !important',
    },
    headerH1:{
        fontSize: '40px',
        fontWeight: '800 !important',
        fontFamily: 'sans-serif',
        [theme.breakpoints.down('xs')]: {
            fontSize: '14px',
        },
    },
    AfterHeaderText:{
        marginBottom:'20px',
        fontSize:'14px',
        fontFamily:'-webkit-pictograph',
        [theme.breakpoints.down('xs')]: {
            fontSize: '12px',
        },
    },
    transform:{
        transform: 'scale(1.1) !important'
    },
    mybox1:{
      width:'200px',
      shadow:'2px',
      padding:'24px',
      height: '50%',
      [theme.breakpoints.down('xs')]: {
        padding: '15px !important'
        },
    },
    mybox2:{
      width:'200px',
      shadow:'2px',
      padding:'24px',
      height: '50%',
      [theme.breakpoints.down('xs')]: {
        padding: '15px !important'
        },

    },
    mybox3:{
      width:'200px',
      shadow:'2px',
      padding:'24px',
      height: '50%',
      [theme.breakpoints.down('xs')]: {
        padding: '15px !important'
        },
    },
    IconPre: {
        fontSize: "45px",
        position: 'absolute',
        top: '50%',
        width: 'auto',
        height: '44px',
        marginTop: '-22px',
        zIndex: '10',
        cursor: 'pointer',
        backgroundSize: '27px 44px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        left: '10px',
        right: 'auto',
        color:'#f23a59'
    },
    IconNext:{
        fontSize: "45px",
        position: 'absolute',
        top: '50%',
        width: 'auto',
        height: '44px',
        marginTop: '-22px',
        zIndex: '10',
        cursor: 'pointer',
        backgroundSize: '27px 44px',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        right: '10px',
        left: 'auto',
        color:'#f23a59'
    },
    media: {
        height: '60px',
        paddingTop: '56.25%', // 16:9
        [theme.breakpoints.down('xs')]: {
            height:'auto !important'
        },
    },
    ButtonFooter:{
        color: '#fff',
        backgroundColor: '#f23a59',
        borderRadius: '20px',
        padding: '10px 20px',
        fontSize: '10px',
        marginTop:'30px'
    },
    pText:{
        fontSize: '11px'
    },
    H2Text:{
        fontWeight:'bold'
    },
    MobileSize:{
        [theme.breakpoints.down('xs')]: {
            display:'none !important'
        },
    }

  }));

  export default useStyle;

import {makeStyles} from "@mui/styles";
const pageNotFoundStyle = makeStyles(()=>({
    content: {
        textAlign:"center",
        marginTop: 100,
        '& p':{
            fontSize: 18,
            marginTop: 5, 
        },
        '& img':{
            width: 500,

        }
    },
}))

export default pageNotFoundStyle;
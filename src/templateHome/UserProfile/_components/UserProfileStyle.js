import { CenterFocusStrong, CenterFocusStrongSharp } from "@mui/icons-material";
import {makeStyles} from "@mui/styles";
const userProfileStyle = makeStyles(()=>({
    content: {
        marginTop: 120,

    },
    title:{
        textAlign: 'center',
        "& h2":{
            fontSize: 35,
            marginBottom: 5,
        },
        '& p':{
            fontSize: 22,
            marginTop: 5, 
        }
        

    }
}))

export default userProfileStyle;
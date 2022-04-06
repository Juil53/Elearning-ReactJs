import {makeStyles} from "@mui/styles";
const userProfileStyle = makeStyles(()=>({
    content: {
        marginBottom: 100,
    },
    title:{
        textAlign: 'center',
        "& h2":{
            fontSize: 35,
            marginBottom: 5,
        },
        '& p':{
            fontSize: 22,
        }
    },
    button:{
        fontSize: 1,
        padding: 10,
    }
}))

export default userProfileStyle;
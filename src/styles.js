import { makeStyles } from '@material-ui/styles'

export default makeStyles({
    container: {
        height: '100vh',
        padding: '16px 40px',
    },
    inputTextArea: {
        height: '100%',
        "& .MuiInputBase-root": {
            height: "100%",
            display: "flex",
            alignItems: "start"
        }
    },
    output: {
        border: '1px solid rgba(7, 7, 7, 0.5)',
        borderRadius: '5px',
        height: '100%',
        padding: '0px 20px',
    },
})
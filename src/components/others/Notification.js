import React, { useEffect } from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { CloseOutlined } from "@material-ui/icons";
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}
export default function PositionedSnackbar(props) {
    // console.log(props);
    const [state, setState] = React.useState({
        open: false,
        vertical: 'top',
        horizontal: 'center',
    });
    
    const { vertical, horizontal, open } = state;

    const handleClose = () => {
        setState({ ...state, open: false });
        props.setSend(true)
    };
    useEffect(() => {
        setState({ open: true, vertical: 'top', horizontal: 'right' });
        // handleClick({ vertical: 'top', horizontal: 'right' })
    }, [setState])
    return (
        <div>
            {/* {buttons} */}
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                onClose={handleClose}
                // message="I love snacks"
                key={vertical + horizontal}
                autoHideDuration={props.time !== ''?props.time:6000}
            >
                <Alert severity={props.type}>
                    <div className="centrar">
                        {props.text}
                        {props.button?
                            <div className="pointer ml-20" onClick={handleClose}>
                                <CloseOutlined/>
                            </div>:''
                        }
                    </div>
                </Alert>
            </Snackbar>
        </div>
    );
}

import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        height: '100%',
        flexGrow: 1,
    },
    toolbar: {
        display: 'flex',
    },
    avatar: {
        marginRight: theme.spacing(3)
    },
    title: {
        flexGrow: 1,
        marginLeft: theme.spacing(2)
    }
}));

import { grey, blue, orange, purple } from '@material-ui/core/colors'
export default {
    labelContainer: {
        display: 'flex',
        paddingTop: 4,
        paddingBottom: 4,
        paddingLeft: 16,
        paddingRight: 16,
        alignItems: 'center',
        cursor: 'pointer',
        opacity: 0.7,
        '&:hover': {
            opacity: 1
        },
        '&.selected': {
            opacity: 1,
            fontWeight: 'bold'
        },    
    },
    circle: {
        width: 12,
        height: 12,
        borderRadius: 12,
        marginRight: 8,
        backgroundColor: '#fff'
    },
    label: {
        fontSize: 11,
        color: '#fff'
    },
    dashSep: {
        flexGrow: 1,
        borderBottom: '2px dotted '.concat('#fff'),
        marginLeft: 8,
        marginRight: 8
    },
    number: {
        fontSize: 11,
        textAlign: 'center',
        minWidth: 14,
        paddingTop: 2,
        paddingBottom: 2,
        fontWeight: 'bold',
        color: '#fff'
    },
}
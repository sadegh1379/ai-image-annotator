import { grey } from '@material-ui/core/colors';
export default {
  container: {
    display: 'flex',
    flexGrow: 1,
    flexDirection: 'column',
    height: '100%',
    maxHeight: 'calc(100vh - (8rem + 80px))',
    backgroundColor: '#313131',
    overflow: 'hidden',
    '&.fullscreen': {
      position: 'absolute',
      zIndex: 99999,
      left: 0,
      right: 0,
      top: 0,
      bottom: 0
    }
  },
  headerTitle: {
    fontWeight: 'bold',
    color: grey[700],
    paddingLeft: 16
  }
};
//# sourceMappingURL=styles.js.map
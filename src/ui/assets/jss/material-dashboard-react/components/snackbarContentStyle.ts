import { createStyles, Theme } from '@material-ui/core/styles';
import {
  defaultFont,
  primaryBoxShadow,
  infoBoxShadow,
  successBoxShadow,
  warningBoxShadow,
  dangerBoxShadow,
  roseBoxShadow,
  whiteColor,
  blackColor,
  grayColor,
  infoColor,
  successColor,
  dangerColor,
  roseColor,
  primaryColor,
  warningColor,
  hexToRgb,
} from '../../material-dashboard-react';

const snackbarContentStyle = (theme: Theme) =>
  createStyles({
    root: {
      ...defaultFont,
      flexWrap: 'unset',
      position: 'relative' as const,
      padding: '20px 15px',
      lineHeight: '20px',
      marginBottom: '20px',
      fontSize: '14px',
      backgroundColor: whiteColor,
      color: grayColor[7],
      borderRadius: '3px',
      minWidth: 'unset',
      maxWidth: 'unset',
      boxShadow: `0 12px 20px -10px rgba(${hexToRgb(whiteColor)}, 0.28), 
       0 4px 20px 0px rgba(${hexToRgb(blackColor)}, 0.12), 
       0 7px 8px -5px rgba(${hexToRgb(whiteColor)}, 0.2)`,
      fontWeight: 400,
    },
    top20: {
      top: '20px',
    },
    top40: {
      top: '40px',
    },
    info: {
      backgroundColor: infoColor[3],
      color: whiteColor,
      ...infoBoxShadow,
    },
    success: {
      backgroundColor: successColor[3],
      color: whiteColor,
      ...successBoxShadow,
    },
    warning: {
      backgroundColor: warningColor[3],
      color: whiteColor,
      ...warningBoxShadow,
    },
    danger: {
      backgroundColor: dangerColor[3],
      color: whiteColor,
      ...dangerBoxShadow,
    },
    primary: {
      backgroundColor: primaryColor[3],
      color: whiteColor,
      ...primaryBoxShadow,
    },
    rose: {
      backgroundColor: roseColor[3],
      color: whiteColor,
      ...roseBoxShadow,
    },
    message: {
      padding: '0',
      display: 'block' as const,
      maxWidth: '89%',
    },
    close: {
      width: '11px',
      height: '11px',
    },
    iconButton: {
      width: '24px',
      height: '24px',
      padding: '0px',
    },
    icon: {
      display: 'block' as const,
      left: '15px',
      position: 'absolute' as const,
      top: '50%',
      marginTop: '-15px',
      width: '30px',
      height: '30px',
    },
    infoIcon: {
      color: infoColor[3],
    },
    successIcon: {
      color: successColor[3],
    },
    warningIcon: {
      color: warningColor[3],
    },
    dangerIcon: {
      color: dangerColor[3],
    },
    primaryIcon: {
      color: primaryColor[3],
    },
    roseIcon: {
      color: roseColor[3],
    },
    iconMessage: {
      paddingLeft: '50px',
      display: 'block' as const,
    },
    actionRTL: {
      marginLeft: '-8px',
      marginRight: 'auto',
    },
  });

export default snackbarContentStyle;

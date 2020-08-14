import React from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import { MeteoTimestamp } from '../../../../../api/meteo/types/meteo.types';

interface MobileDeviceRowProps {
    dayData: MeteoTimestamp[] | undefined;
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }),
);

const MobileDeviceRow: React.FC<MobileDeviceRowProps> = ({ dayData }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>Mon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Blah
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MobileDeviceRow;

import React from 'react';

import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

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
      {/* map data here. One Accordion item for each day. */}
      <Accordion>
        <AccordionSummary>Mon</AccordionSummary>
        <AccordionDetails>
          <div className="container">
            <div className="row">
              <div className="col">
                <p>Hello</p>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <p>How are you</p>
              </div>
            </div>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MobileDeviceRow;

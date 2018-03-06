import React from 'react';
import PropTypes from 'prop-types';
import {
  translate
} from 'react-i18next';

import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Divider from 'material-ui/Divider';

import LocationOn from 'material-ui-icons/LocationOn';
import DateRange from 'material-ui-icons/DateRange';
import Work from 'material-ui-icons/Work';

import locale from '../../../assets/locales/en-US/translations';

const Experience = ( props ) => {
  const {
    c,
    t
  } = props;

  const res = locale.experience.jobs.map( ( d, i ) => {
    const activities = d.activity.map( ( content, ii ) => ( <li key={ii}>
      <Typography className={c.padding} variant="body1">{t(`experience.jobs.${i}.activity.${ii}`)}</Typography>
    </li> ) );

    return (
      <div key={i}>
        <Grid container spacing={0}>
          {i > 0 && (
          <Grid item xs={12}>
            <Divider className={c.divider} />
          </Grid>
        )}
          <Grid item xs={12} className={c.section}>
            <Typography variant="title">{t(`experience.jobs.${i}.title`)}</Typography>
            <Typography className={c.padding} variant="body2"><LocationOn className={c.iconSmall} /> {t(`experience.jobs.${i}.location`)}
          &nbsp;&nbsp;
              <DateRange className={c.iconSmall} /> {t(`experience.jobs.${i}.started`)}&nbsp;-&nbsp;{t(`experience.jobs.${i}.ended`)}
            </Typography>
            <Typography className={c.padding} variant="body2"><strong>SITUATION</strong></Typography>
            <Typography className={c.padding} variant="body1">{t(`experience.jobs.${i}.situation`)}</Typography>
            <Typography className={c.padding} variant="body2"><strong>TASK</strong></Typography>
            <Typography className={c.padding} variant="body1">{t(`experience.jobs.${i}.task`)}</Typography>
            <Typography className={c.padding} variant="body2"><strong>ACTIVITY</strong></Typography>
            <ul className={c.ul}>{activities}</ul>
            <Typography className={c.padding} variant="body2"><strong>RESULT</strong></Typography>
            <Typography className={c.padding} variant="body1">{t(`experience.jobs.${i}.result`)}</Typography>
          </Grid>
        </Grid>
      </div> );
  } );

  return (
    <Grid container className={c.container} spacing={0}>
      <Grid item xs={12}>
        <Typography variant="title"><span><Work className={c.iconLarge} /></span>
          {t('experience.title')}
        </Typography>
      </Grid>
      <Grid item xs={12}>{res}</Grid>
    </Grid> );
}

Experience.propTypes = {
  c: PropTypes.object,
  t: PropTypes.object
}
Experience.defaultProps = {
  c: {},
  t: {}
};

export default translate( 'translations' )( Experience );
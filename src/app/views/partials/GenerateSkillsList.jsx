import React from 'react';
import PropTypes from 'prop-types';
import cloudinary from 'cloudinary';
import LazyLoad from 'react-lazy-load';
import {
  translate
} from 'react-i18next';

import {
  withStyles
} from 'material-ui/styles';
import Grid from 'material-ui/Grid';
import Typography from 'material-ui/Typography';
import Tooltip from 'material-ui/Tooltip';
import Star from 'material-ui-icons/Star';

const styles = theme => ( {
  skillImg: {
    display: 'inline-block',
    width: '48px !important',
    height: '48px !important',
    padding: '7 !important'
  }
} );

const GenerateSkillsList = ( props ) => {
  const c = { ...props.c,
    ...props.classes
  };
  const {
    data,
    item,
    t
  } = props;

  const list = data.map( ( d, i ) => (
    <LazyLoad key={i} className={c.skillImg}>
      <Tooltip title={t(`${item}.${i}`)} placement="bottom">
        <img src={cloudinary.url(`tools/${d.replace(/\s+/g, '-').toLowerCase()}.png`, {quality: 50, width: 48, crop: "scale", secure: true})} alt={t(`${item}.${i}`)} />
      </Tooltip>
    </LazyLoad> ) );

  return ( <div>{list}</div> );
}

GenerateSkillsList.propTypes = {
  classes: PropTypes.object,
  c: PropTypes.object,
  t: PropTypes.func.isRequired,
  data: PropTypes.array,
  item: PropTypes.string
}
GenerateSkillsList.defaultProps = {
  classes: {},
  c: {},
  data: [],
  item: null
};

export default withStyles( styles )( translate()( GenerateSkillsList ) );
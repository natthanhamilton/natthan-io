import React from 'react';
import PropTypes from 'prop-types';
import Img from 'react-image-smooth-loading';
import { withTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';

import locale from '../../../assets/locales/en-US/translations';
import { cloudinary } from '../../utils';

const Person = (props) => {
	const { classes, t } = props;

	const actionsList = locale.actions.map((action, i) => {
		const name = t(`actions.${i}.name`);
		const path = action.name.toLowerCase();
		return (
			<a key={name} target="_new" href={action.url}>
				<Img
					className={classes.imgPlaceholder}
					src={cloudinary.url(`icons/${path}.png`, cloudinaryOpts)}
					alt={name}
					title={name}
				/>
			</a>
		);
	});

	return (
		<Grid container className={classes.container} spacing={24}>
			<Grid item xs={12}>
				<Avatar
					alt="Natthan Hamilton"
					src={cloudinary.url(`portraits/nate.jpg`, cloudinaryAvatar)}
					className={classes.avatar}
				/>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="title" align="center" paragraph>
					{t(`person.name`)}
				</Typography>
				<Typography variant="body1">
					{t(`person.description`)}
				</Typography>
			</Grid>
			<Grid className={classes.actions} item xs={12}>
				{actionsList}
			</Grid>
		</Grid>
	);
};

Person.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func.isRequired,
};
Person.defaultProps = {
	classes: {},
};

//Cloudinary
const cloudinaryOpts = { width: 36, crop: 'scale', secure: true };
const cloudinaryAvatar = {
	height: 113,
	quality: 60,
	width: 100,
	crop: 'scale',
	secure: true,
};

// Theme
const styles = () => ({
	avatar: {
		width: 100,
		height: 100,
		margin: 'auto',
	},
	actionIcon: {
		maxHeight: 36,
		padding: '0 5px',
	},
	actions: {
		textAlign: 'center',
	},
	imgPlaceholder: {
		display: 'inline-block',
		width: '36px !important',
		height: '36px !important',
		padding: '5 !important',
		'& img': {
			height: '36px !important',
			width: '36px !important',
		},
	},
});

export default withStyles(styles)(withTranslation()(Person));

import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import Phone from '@material-ui/icons/Phone';
import AccountCircle from '@material-ui/icons/AccountCircle';
import LocationOn from '@material-ui/icons/LocationOn';
import Email from '@material-ui/icons/Email';

const About = (props) => {
	const { classes, t } = props;

	return (
		<Grid container className={classes.container} spacing={24}>
			<Grid item xs={12}>
				<Typography className={classes.sectionTitle} variant="headline">
					<span>
						<AccountCircle className={classes.iconLarge} />
					</span>{' '}
					{t('about.aboutTitle')}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">
					{t('about.aboutContent')}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography className={classes.sectionTitle} variant="headline">
					<span>
						<Phone className={classes.iconLarge} />
					</span>{' '}
					{t('about.contactTitle')}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography variant="body1">
					<LocationOn className={classes.iconSmall} />{' '}
					{t('about.contactLocation')}
				</Typography>
				<Typography variant="body1">
					<Email className={classes.iconSmall} />{' '}
					{t('about.contactEmail')}
				</Typography>
			</Grid>
		</Grid>
	);
};

About.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func.isRequired,
};
About.defaultProps = {
	classes: {},
};

export default withTranslation()(About);

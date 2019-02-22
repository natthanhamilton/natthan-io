import React from 'react';
import PropTypes from 'prop-types';
import { withTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import LocationOn from '@material-ui/icons/LocationOn';
import DateRange from '@material-ui/icons/DateRange';
import Work from '@material-ui/icons/Work';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import locale from '../../../assets/locales/en-US/translations';

const Experience = (props) => {
	const { classes, t } = props;

	const experiences = locale.experience.jobs.map((job, i) => {
		const jobTitle = t(`experience.jobs.${i}.title`);
		const activities = job.activity.map((content, ii) => {
			const name = t(`experience.jobs.${i}.activity.${ii}`);
			return (
				<li key={name}>
					<Typography variant="body1">{name}</Typography>
				</li>
			);
		});
		const divider =
			i == 0 ? null : (
				<Grid item xs={12} className={classes.section}>
					<Divider />
				</Grid>
			);
		const title = <Typography variant="title">{jobTitle}</Typography>;
		const company = (
			<Typography variant="body2">
				{t(`experience.jobs.${i}.company`)}
			</Typography>
		);
		const description = (
			<Typography className={classes.padding} variant="body2" paragraph>
				<LocationOn className={classes.iconSmall} />{' '}
				{t(`experience.jobs.${i}.location`)}
				{'  '}
				<DateRange className={classes.iconSmall} />{' '}
				{t(`experience.jobs.${i}.started`)}
				{' - '}
				{t(`experience.jobs.${i}.ended`)}
			</Typography>
		);

		return (
			<Grid container key={jobTitle}>
				{divider}
				<Grid item xs={12} className={classes.section}>
					{title}
					{company}
					{description}
					<ExpansionPanel>
						<ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
							<Typography variant="body2" noWrap>
								{t(`prompts.viewExperience`)}
							</Typography>
						</ExpansionPanelSummary>
						<ExpansionPanelDetails className={classes.padding}>
							<div>
								<Typography
									className={classes.sectionHeader}
									variant="body2">
									SITUATION
								</Typography>
								<Typography variant="body1" paragraph>
									{t(`experience.jobs.${i}.situation`)}
								</Typography>

								<Typography
									className={classes.sectionHeader}
									variant="body2">
									TASK
								</Typography>
								<Typography variant="body1" paragraph>
									{t(`experience.jobs.${i}.task`)}
								</Typography>

								<Typography
									className={classes.sectionHeader}
									variant="body2">
									ACTIVITY
								</Typography>
								<ul className={classes.ul}>{activities}</ul>

								<Typography
									className={classes.sectionHeader}
									variant="body2">
									RESULT
								</Typography>
								<Typography variant="body1" paragraph>
									{t(`experience.jobs.${i}.result`)}
								</Typography>
							</div>
						</ExpansionPanelDetails>
					</ExpansionPanel>
				</Grid>
			</Grid>
		);
	});

	return (
		<Grid container className={classes.container}>
			<Grid item xs={12}>
				<Typography className={classes.sectionTitle} variant="headline">
					<span>
						<Work className={classes.iconLarge} />
					</span>
					{t('experience.title')}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				{experiences}
			</Grid>
		</Grid>
	);
};

Experience.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func.isRequired,
};
Experience.defaultProps = {
	classes: {},
};

// Theme
const styles = () => ({
	padding: {
		paddingTop: 2.5,
		paddingBottom: 2.5,
	},
	sectionHeader: {
		fontWeight: 'bold',
	},
	ul: {
		margin: 0,
	},
	container: {
		margin: 0,
		padding: 12,
		width: '100% !important',
	},
	iconLarge: {
		width: 25,
		height: 25,
	},
	iconSmall: {
		width: 10,
		height: 10,
	},
	section: {
		padding: '10px 0 10px 0',
		'@media (min-width: 960px)': {
			paddingLeft: '40px',
		},
	},
});

export default withStyles(styles)(withTranslation()(Experience));

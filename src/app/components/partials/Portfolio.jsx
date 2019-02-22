import React, { Component } from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { withTranslation } from 'react-i18next';

import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GroupWork from '@material-ui/icons/GroupWork';

import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';

import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';

import locale from '../../../assets/locales/en-US/translations';
import GenerateSkillsList from './GenerateSkillsList';
import { cloudinary } from '../../utils';

class Portfolio extends Component {
	constructor(props) {
		super(props);
		this.state = {
			index: null,
		};
	}

	handleClose = () => {
		this.setState({ index: null });
	};

	renderPortfolioList = () => {
		const { classes, t } = this.props;

		return t('portfolio.list').map((portfolio) => {
			const cover = (
				<LazyLoad className={classes.listImage} height={200}>
					<div
						style={{
							background: `url(${cloudinary.url(
								`portfolio/${portfolio.image}.jpg`,
								cloudinaryOpts,
							)}) 50% 50% no-repeat`,
						}}
					/>
				</LazyLoad>
			);

			const title = portfolio.website ? (
				<a href={portfolio.website}>
					{portfolio.name} <OpenInNewIcon />
				</a>
			) : (
				portfolio.name
			);

			return (
				<Grid key={portfolio.name} item xs={12} sm={6}>
					<Card>
						{cover}
						<CardContent>
							<Typography variant="title">{title}</Typography>
							<Typography variant="body1" noWrap paragraph>
								{portfolio.summary}
							</Typography>
							<GenerateSkillsList
								item={portfolio.tools}
								data={portfolio.tools}
							/>
						</CardContent>
					</Card>
				</Grid>
			);
		});
	};

	renderDialog = () => {
		const { classes, t } = this.props;
		const { index } = this.state;

		if (index == null) return null;

		const name = t(`portfolio.list.${index}.name`);
		const summary = t(`portfolio.list.${index}.summary`);

		return (
			<Dialog
				className={classes.dialog}
				open={Boolean(index)}
				onClose={this.handleClose}
				aria-labelledby={name}
				aria-describedby={summary}>
				<DialogContent>
					<DialogContentText id={summary}>
						<Paper className={classes.paper}>
							<img
								className={classes.image}
								src={cloudinary.url(
									`portfolio/${t(
										`portfolio.list.${index}.image`,
									)}.jpg`,
									{
										secure: true,
									},
								)}
								alt={name}
							/>
						</Paper>
						<Typography className={classes.title} variant="title">
							{name}
						</Typography>
						<Typography variant="body1">
							{t(`portfolio.list.${index}.content`)}
						</Typography>
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={this.handleClose} color="primary">
						{t(`prompts.close`)}
					</Button>
				</DialogActions>
			</Dialog>
		);
	};

	render() {
		const { classes, t } = this.props;

		return (
			<Grid container className={classes.container}>
				<Grid item xs={12}>
					<Typography
						className={classes.sectionTitle}
						variant="headline">
						<span>
							<GroupWork className={classes.iconLarge} />
						</span>
						{t(`portfolio.title`)}
					</Typography>
				</Grid>
				<Grid item xs={12}>
					<Grid container spacing={24}>
						{this.renderPortfolioList()}
					</Grid>
				</Grid>
				{this.renderDialog()}
			</Grid>
		);
	}
}

Portfolio.propTypes = {
	classes: PropTypes.object,
	t: PropTypes.func.isRequired,
};
Portfolio.defaultProps = {
	classes: {},
};

// Cloudinary
const cloudinaryOpts = {
	quality: 'auto:good',
	crop: 'scale',
};

// Theme
const styles = {
	dialog: {
		zIndex: 11111111,
	},
	paper: {
		margin: '0 0 20 0',
		padding: 0,
	},
	image: {
		maxWidth: '100%',
	},
	title: {
		paddingBottom: 10,
	},
	cardActions: {
		textAlign: 'right',
		display: 'block',
	},
	listImage: {
		position: 'relative',
		'& div': {
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			height: '100%',
			backgroundSize: 'cover !important',
		},
	},
	skillsPanel: {
		textAlign: 'center',
	},
	italic: {
		fontStyle: 'italic',
	},
};

export default withStyles(styles)(withTranslation()(Portfolio));

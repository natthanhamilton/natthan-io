import React from 'react';
import Img from 'react-image-smooth-loading';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';

import { makeStyles } from '@material-ui/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Chip from '@material-ui/core/Chip';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

import LocationOn from '@material-ui/icons/LocationOnOutlined';
import DateRange from '@material-ui/icons/DateRangeOutlined';
import School from '@material-ui/icons/SchoolOutlined';
import Work from '@material-ui/icons/WorkOutline';
import Star from '@material-ui/icons/StarBorder';
import OpenInNewIcon from '@material-ui/icons/OpenInNewOutlined';
import GroupWork from '@material-ui/icons/GroupWorkOutlined';

import locale from '../../assets/locales/en-US/translations';
import { cloudinary, GenerateSkillsList } from '../utils';

const cloudinaryOpts = {
	quality: 'auto:good',
	crop: 'scale',
	secure: true,
};
const cloudinaryAvatar = {
	height: 400,
	quality: 100,
	crop: 'scale',
	secure: true,
};
const useStyles = makeStyles({
	root: {
		flexGrow: 1,
		margin: 0,
		padding: 0,
	},
	container: {
		margin: 0,
		padding: 12,
		width: '100% !important',
	},
	iconLarge: {
		fontSize: '30px !important',
		position: 'relative',
		paddingRight: 5,
	},
	iconSmall: {
		fontSize: 14,
		top: 5,
		position: 'relative',
		paddingRight: 5,
	},
	section: {
		padding: '10px 0 10px 0',
		'@media (min-width: 960px)': {
			paddingLeft: '40px',
		},
	},
	avatar: {
		width: 'auto',
		margin: 'auto',
	},
	actionIcon: {
		maxHeight: 36,
		padding: '0 5px',
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
	padding: {
		paddingTop: 2.5,
		paddingBottom: 2.5,
	},
	gitLink: {
		textDecoration: 'none',
		padding: '0 5px',
	},
	footer: {
		flexGrow: 1,
		padding: 40,
		paddingLeft: 0,
		paddingRight: 0,
		textAlign: 'center',
	},
	chip: {
		margin: 4,
	},
	bold: {
		fontWeight: 'bold',
	},
	listImage: {
		height: 200,
		backgroundSize: 'cover !important',
	},
	textRight: {
		textAlign: 'right',
	},
	textCenter: {
		textAlign: 'center',
	},
	comingSoon: {
		padding: 40,
	},
});

const Experience = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	const experiences = t(`experience.list`).map((job, i) => {
		const divider =
			i == 0 ? null : (
				<Grid item xs={12} className={classes.section}>
					<Divider />
				</Grid>
			);
		const dates = (
			<Typography>
				<LocationOn className={classes.iconSmall} />
				{job.location}
				<br />
				<DateRange className={classes.iconSmall} /> {job.started}
				{' - '}
				{job.ended}
			</Typography>
		);

		return (
			<Grid container key={job.title}>
				{divider}
				<Grid item xs={12} className={classes.section}>
					<Grid container>
						<Grid item xs={12} sm={6}>
							<Typography variant="h5">{job.title}</Typography>
							<Typography>{job.company}</Typography>
						</Grid>
						<Grid item xs={12} sm={6} className={classes.textRight}>
							{dates}
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} className={classes.section}>
					<Typography
						dangerouslySetInnerHTML={{
							__html: job.summary,
						}}
					/>
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

const Education = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<Grid container className={classes.container}>
			<Grid item xs={12}>
				<Typography className={classes.sectionTitle} variant="headline">
					<span>
						<School className={classes.iconLarge} />
					</span>
					{t('education.title')}
				</Typography>
			</Grid>

			<Grid item xs={12} className={classes.section}>
				<Grid container>
					<Grid item xs={12} sm={6}>
						<Typography variant="h5">
							{t('education.uName')}
						</Typography>
						<Typography>{t('education.uDegree')}</Typography>
					</Grid>
					<Grid item xs={12} sm={6} className={classes.textRight}>
						<Typography>
							<LocationOn className={classes.iconSmall} />
							{t('education.uLocation')}
							<br />
							<DateRange className={classes.iconSmall} />
							{t('education.uStart')} -{t('education.uEnd')}
						</Typography>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
};

const Person = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<Grid container className={classes.container} spacing={24}>
			<Grid item xs={12} className={classes.textCenter}>
				<img
					alt="Natthan Hamilton"
					src={cloudinary.url(
						`portraits/nate2.jpg`,
						cloudinaryAvatar,
					)}
					className={classes.avatar}
				/>
			</Grid>
		</Grid>
	);
};

const About = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	const actionsList = t(`actions`).map((action) => (
		<a key={action.name} target="_new" href={action.url}>
			<Img
				className={classes.imgPlaceholder}
				src={cloudinary.url(
					`icons/${action.name.toLowerCase()}.png`,
					cloudinaryOpts,
				)}
				alt={action.name}
				title={action.name}
			/>
		</a>
	));

	return (
		<Grid>
			<Typography variant="h5" paragraph>
				{t(`person.name`)}
			</Typography>
			<Typography paragraph>{t('person.description')}</Typography>
			<Typography paragraph>{t('about.aboutContent')}</Typography>
			<Grid item xs={12}>
				{actionsList}
			</Grid>
		</Grid>
	);
};

const Footer = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<Grid className={classes.footer}>
			<a
				className={classes.gitLink}
				target="_new"
				href="https://github.com/natthanhamilton/natthan-io">
				<Button color="primary" variant="contained">
					{t(`github.linkText`)}
				</Button>
			</a>
		</Grid>
	);
};

const Skills = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	const tech = t(`skills.tech`).map((s) => (
		<Chip key={s} label={s} className={classes.chip} />
	));
	const biz = t(`skills.biz`).map((s) => (
		<Chip key={s} label={s} className={classes.chip} />
	));

	return (
		<Grid container className={classes.container} spacing={24}>
			<Grid item xs={12}>
				<Typography className={classes.sectionTitle} variant="headline">
					<span>
						<Star className={classes.iconLarge} />
					</span>
					{t(`skills.title`)}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Typography className={classes.bold}>
					{t(`skills.techTitle`)}
				</Typography>
				{tech}
			</Grid>
			<Grid item xs={12}>
				<Typography className={classes.bold}>
					{t(`skills.bizTitle`)}
				</Typography>
				{biz}
			</Grid>
		</Grid>
	);
};

const SkillsBreakdown = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<Grid item xs={12}>
			<Grid container className={classes.container}>
				<Grid item xs={12}>
					<Typography
						className={classes.sectionTitle}
						variant="headline">
						<span>
							<Star className={classes.iconLarge} />
						</span>
						{t(`skills.breakdownTitle`)}
					</Typography>
				</Grid>
				<Grid className={classes.section} item xs={12}>
					<Typography variant="h5">
						{t(`skills.experiencedTitle`)}
					</Typography>
					<GenerateSkillsList
						item="skillsExperienced"
						data={locale.skillsExperienced}
					/>
				</Grid>
				<Grid className={classes.section} item xs={12}>
					<Typography variant="h5">
						{t(`skills.familiarTitle`)}
					</Typography>
					<GenerateSkillsList
						item="skillsFamiliar"
						data={locale.skillsFamiliar}
					/>
				</Grid>
				<Grid className={classes.section} item xs={12}>
					<Typography variant="h5">
						{t(`skills.toolsTitle`)}
					</Typography>
					<GenerateSkillsList
						item="skillsTools"
						data={locale.skillsTools}
					/>
				</Grid>
			</Grid>
		</Grid>
	);
};

const Layout = ({ children }) => {
	const { t } = useTranslation();
	const classes = useStyles();

	const skillsExperienced = t(`skillsExperienced`).map((d) => d);
	const skillsFamiliar = t(`skillsFamiliar`).map((d) => d);
	const skillsLearning = t(`skillsLearning`).map((d) => d);

	return (
		<Grid
			container
			className={classes.root}
			alignItems="flex-start"
			justify="center">
			<Grid item className={classes.container} xs={12} sm={10} md={8}>
				{children}
			</Grid>

			<Helmet>
				<title>{t('site.title')}</title>
				<meta
					name="description"
					content={
						skillsExperienced + skillsFamiliar + skillsLearning
					}
				/>
				<meta name="author" content={t('site.author')} />

				<meta property="og:title" content={t('seo.og.title')} />
				<meta
					property="og:description"
					content={t('seo.og.description')}
				/>
				<meta property="og:url" content={t('seo.og.url')} />
				<meta property="og:image" content={t('seo.og.image')} />

				<meta name="twitter:card" content={t('seo.twitter.card')} />
				<meta name="twitter:site" content={t('seo.twitter.site')} />
				<meta
					name="twitter:creator"
					content={t('seo.twitter.creator')}
				/>
				<meta name="twitter:title" content={t('seo.twitter.title')} />
				<meta
					name="twitter:description"
					content={t('seo.twitter.description')}
				/>
				<meta name="twitter:image" content={t('seo.twitter.image')} />
			</Helmet>
		</Grid>
	);
};

const RenderPortfolioList = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	return t('portfolio.list').map((portfolio) => {
		const cover = (
			<div
				className={classes.listImage}
				style={{
					background: `url(${cloudinary.url(
						`portfolio/${portfolio.image}.jpg`,
						cloudinaryOpts,
					)}) 50% 50% no-repeat`,
				}}
			/>
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
						<Typography variant="h5">{title}</Typography>
						<Typography noWrap paragraph>
							{portfolio.summary}
						</Typography>
						{/* <GenerateSkillsList
							item={portfolio.tools}
							data={portfolio.tools}
						/> */}
					</CardContent>
				</Card>
			</Grid>
		);
	});
};

const Portfolio = () => {
	const { t } = useTranslation();
	const classes = useStyles();

	return (
		<Grid container className={classes.container}>
			<Grid item xs={12}>
				<Typography className={classes.sectionTitle} variant="headline">
					<span>
						<GroupWork className={classes.iconLarge} />
					</span>
					{t(`portfolio.title`)}
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<Grid container spacing={24}>
					{/* <RenderPortfolioList /> */}
					<Typography variant="h6" className={classes.comingSoon}>
						Coming Soon...
					</Typography>
				</Grid>
			</Grid>
		</Grid>
	);
};

const Root = () => {
	const classes = useStyles();

	return (
		<Layout>
			<Grid container className={classes.root}>
				<Grid item xs={12}>
					<Grid container alignItems="center">
						<Grid item xs={12} sm={6}>
							<Person />
						</Grid>
						<Grid item xs={12} sm={6}>
							<About />
						</Grid>
					</Grid>
				</Grid>
				<Grid item xs={12} sm={12}>
					<Skills />
				</Grid>
				<Grid item xs={12} sm={12}>
					<Experience />
				</Grid>
				<Grid item xs={12} sm={12}>
					<Education />
				</Grid>
				<Grid item xs={12} sm={12}>
					<Portfolio />
				</Grid>

				<SkillsBreakdown />
			</Grid>
			<Footer />
		</Layout>
	);
};

export default Root;

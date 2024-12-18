import { themes as prismThemes, themes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
	title: 'Chain Docs',
	tagline: 'Building distributed real-time applications',
	favicon: 'img/favicon.ico',

	url: 'https://docs-topchain.topology.gg',
	baseUrl: '/',

	organizationName: 'topology-foundation',
	projectName: 'docs-chain',

	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',

	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	markdown: {
		mermaid: true
	},

	presets: [
		[
			'classic',
			{
				docs: {
					routeBasePath: '/',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			} satisfies Preset.Options,
		],
	],

	themes: ['@docusaurus/theme-mermaid'],

	themeConfig: {
		image: 'https://avatars.githubusercontent.com/u/157637200',
		navbar: {
			title: 'Chain',
			logo: {
				alt: 'topology_logo',
				src: 'https://avatars.githubusercontent.com/u/157637200',
				href: 'https://topology.gg/',
			},
			items: [
				{
					href: 'https://github.com/topology-foundation',
					label: 'GitHub',
					position: 'right',
				},
			],
		},
		footer: {
			style: 'dark',
			links: [
				{
					items: [
						{
							html: `<a href="https://topology.gg" target="_blank"><img src="/img/logo_horizontal_dark.png"/></a>`
						}
					]
				},
				{
					title: 'Documentation',
					items: [
						{
							label: 'Quick Start',
							href: 'https://docs.topology.gg/get-started',
						},
						{
							label: 'Basics',
							href: 'https://docs.topology.gg/technical-overview',
						},
					],
				},
				{
					title: 'Social',
					items: [
						{
							label: 'Website',
							href: 'https://topology.gg',
						},
						{
							label: 'Blog',
							href: 'https://blog.topology.gg',
						},
						{
							label: 'X (Twitter)',
							href: 'https://x.com/topology_gg',
						},
						{
							label: 'Youtube',
							href: 'https://www.youtube.com/@topology_gg',
						}
					],
				},
				{
					title: 'Community',
					items: [
						{
							label: 'Telegram',
							href: 'https://t.me/topologyfrens',
						},
						{
							label: 'Discord',
							href: 'https://discord.gg/8hzsMMhX',
						},
					],
				}
			],
			copyright: `Copyright © ${new Date().getFullYear()} Topology. Built with Docusaurus.`,
		},
		prism: {
			theme: prismThemes.github,
			darkTheme: prismThemes.dracula,
		},
	} satisfies Preset.ThemeConfig,
};

export default config;

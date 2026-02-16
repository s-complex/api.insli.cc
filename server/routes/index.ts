import { defineHandler, html } from 'nitro/h3';

export default defineHandler((event) => {
	return html(`
		<head>
			<title>API - Sliver Complex</title>
			<link rel="icon" href="https://library.gxres.net/images/icons/favicon.ico">
			<style>
				html {
					font-family: system-ui, sans-serif;
				}
				.content {
					display: flex;
					justify-content: center;
					align-items: center;
					text-align: center;
				}
				a {
					text-decoration: none;
				}
			</style>
		</head>
		<body class="content">
			<hgroup>
				<h1>200 OK</h1>
				<p>You're touching this page via ${event.url}.</p>
				<p>Visit our landing page: <a href="https://sirvr.win/" rel="noopener noreferrer" target="_blank">https://sirvr.win/</a></p>
			</hgroup>
		</body>
	`);
});

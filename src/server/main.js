import render from './render';

exports.handler = function (event, context) {
	const {
		statusCode = 200,
		headers = {},
		body = ""
} = render(`/${event.requestContext.stage}${event.path}`);

	context.succeed({
		statusCode,
		headers: {
				"Content-Type": "text/html",
				"Cache-Control": "public, max-age=60",
				...headers
		},
		body: `
			<!DOCTYPE html>

			<html>
			<head>
				<meta charset="utf-8">
				<meta name="viewport" content="width=device-width, initial-scale=1.0">
				<title>React + API Gateway + Lambda test</title>
			</head>

			<body>
				<div id="app">${body}</div>
				<script src="https://s3-ap-southeast-2.amazonaws.com/test.claudia.react/assets/bundle.js"></script>
			</body>
			</html>
		`
	});
}
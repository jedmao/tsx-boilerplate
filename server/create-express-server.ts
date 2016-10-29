import * as express from 'express';
import { Router } from 'express';

export default function createExpressServer({
	port = 3000,
	router = Router()
}) {
	const app = express();

	app.use(router);

	app.use(logErrors);
	app.use(clientErrorHandler);
	app.use(errorHandler);

	console.log('Starting Express server...');
	const server = app.listen(port, () => {
		console.log(`Express server started on port ${port}`);
	});

	return server.close;
}

function logErrors(
	err: Error,
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) {
	console.error(err.stack);
	next(err);
}

function clientErrorHandler(
	err: Error,
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) {
	if (req.xhr) {
		res.status(500).send({ error: 'Something failed!' });
	} else {
		next(err);
	}
}

function errorHandler(
	err: Error,
	req: express.Request,
	res: express.Response,
	next: express.NextFunction
) {
	res.status(500);
	res.render('error', { error: err });
}

import createExpressServer from './server/create-express-server';
import createRouter from './router';

const stopExpressServer = createExpressServer({
	router: createRouter()
});

process.on('SIGTERM', () => {
	stopExpressServer(() => {
		process.exit(0);
	});
});

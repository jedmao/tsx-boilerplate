import { Router } from 'express';

export default function createRouter() {
	const router = Router();

	router.get('/foo', (req, res) => {
		res.send('foo');
	});

	router.get('/bar', (req, res) => {
		res.send('bar');
	});

	return router;
}

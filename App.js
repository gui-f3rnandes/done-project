import express from 'express';

class App {
	constructor() {
		this.app = express();
		this.middlewares();
		this.routes();
	}

	middlewares() {
		// aqui conterão as manipulações entre rotas
		this.app.use(express.urlencoded({ extended: true })); // isto permite entrada de formulários no servidor
		this.app.use(express.json()); // isto permite utilização de json no servidor
	}

	routes() {
		// this.app.use('/api');
		// this.app.use('/');
	}
}

export default new App().app;

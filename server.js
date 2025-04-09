import App from './App.js';

const port = 3000;

App.listen(port, () => {
	console.log(`Servidor rodando na porta ${port}`);
	console.log(`Para a API acesse http://localhost:${port}`);
});

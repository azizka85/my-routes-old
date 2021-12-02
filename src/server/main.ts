import { app, port } from './app'

const server = app.listen(port, () => console.log(`Running on port: ${port}`));

process.on('SIGTERM', () => server.close());
process.on('exit', () => server.close());

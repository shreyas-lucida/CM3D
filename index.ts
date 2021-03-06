// configure (default as dev) or pick environment
process.env.MYSQL_ENV = process.env.MYSQL_ENV || process.argv[2] || 'development';
const PORT = process.env.APP_PORT || 8080;

// load modules
import App from './configs/express';

App.listen(+PORT, function () {
    console.log('Server connection success !!!')
});

process.on('SIGTERM', () => endServer);

process.on('SIGINT', () => endServer);

function endServer() {
    console.info('SIGTERM signal received.');
    console.log('Closing server.');
    App.close();
}
// re-export app instance for testing purpose
module.exports = App;
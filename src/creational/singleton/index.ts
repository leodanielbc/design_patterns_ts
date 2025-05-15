import { Logger } from './Logger';

console.log('Singleton');

const logger1 = Logger.getInstance();
const logger2 = Logger.getInstance();

logger1.log('logger 1');
logger2.log('logger 2');

console.log('Ambos loggers son la misma instancia? ', logger1 === logger2);
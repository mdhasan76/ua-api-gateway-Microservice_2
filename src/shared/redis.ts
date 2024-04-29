import { createClient } from 'redis';
import logger from './logger';
import config from '../config';

let redisClient = createClient({
  url: config.redisUrl
});

redisClient.on('error', (err) => logger.error('Redis error', err));
redisClient.on('connect', (info) => logger.info('Redis connected'));

const connect = async (): Promise<void> => {
  redisClient.connect();
};

export const RedisClient = { connect };

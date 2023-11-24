// export const auth_service = 'AUTH_SERVICE';
// export const product_service = 'PRODUCT_SERVICE';

export const URL_RABBIT_MQ = 'amqp://root:12345@localhost:5672';

export const NAME_SERVICE = {
  auth_service: 'AUTH_SERVICE',
  product_service: 'PRODUCT_SERVICE',
};

export const NAME_QUEUE = {
  auth_queue: 'auth_queue',
  product_queue: 'product_queue',
};

export const ROOT_CONTROLLER = {
  AUTH: 'auth',
  USER: 'user',
};

export enum ROLE {
  USER = 'USER',
  ADMIN = 'ADMIN',
}

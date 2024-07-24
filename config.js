module.exports = {
    JWT: {
      secret: 'GossipCoco',
      expire: '24h'
    },
    database: "Webmarketing",
    host: "localhost",
    user: "sa",
    server: "127.0.0.1",
    server: "COCO_PORTABLE",
    password: "23031983",
    DB: "Webmarketing",
    dialect: "mysql",
    port: 1443,
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
    options: {
      encrypt: true,
      enableArithAbort: true,
    },
  };
  
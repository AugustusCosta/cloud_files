module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        host: 'ds159180.mlab.com',
        srv: false,
        port: 59180,
        database: 'cloud_files',
        username: 'root',
        password: '1q2w3e',
      },
      options: {
        authenticationDatabase: 'cloud_files',
        ssl: false,
      },
    },
  },
});

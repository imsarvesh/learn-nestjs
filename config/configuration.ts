export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  MONGODB: process.env.MONGODB
});

export default () => ({
  port: parseInt(process.env.PORT, 10) || 3000,
  redis_url: process.env.REDIS_URL,
  throller_ttl: process.env.THROTTLER_TTL,
  throller_limit: process.env.THROTTLER_LIMIT,
});

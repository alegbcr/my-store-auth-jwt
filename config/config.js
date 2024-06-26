require('dotenv').config();

const config = {
  env: process.env.NODE_ENV || 'development',
  isProd: process.env.NODE_ENV === 'production',
  port: process.env.PORT || 3000,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  dbHost: process.env.DB_HOST,
  dbName: process.env.DB_NAME,
  dbPort: process.env.DB_PORT,
  dbUrl: process.env.DATABASE_URL,
  dbRnderUrl: process.env.POSTGRES_URL,
  jwtSecret: process.env.JWT_SECRET,
  emailSender: process.env.EMAIL_SENDER,
  passwordSender: process.env.PASSWORD_SENDER,
  resendApiKey: process.env.RESEND_API_KEY,
};

module.exports = { config };

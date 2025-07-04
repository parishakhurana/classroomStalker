import AWS from "aws-sdk";
import dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

// Configure AWS credentials and region
AWS.config.update({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

export default AWS;

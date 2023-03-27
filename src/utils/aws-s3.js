require("dotenv").config();
const S3 = require("aws-sdk/clients/s3");
const fs = require("fs");

const s3 = new S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const uploadOneFileInAws = (file, postId) => {
  const fileStream = fs.createReadStream(file.path);

  const params = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${postId}/${file.originalname}`,
    Body: fileStream,
  };

  return s3.upload(params).promise();
};

module.exports = uploadOneFileInAws;

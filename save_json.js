const fs = require("fs");
const path = require("path");
const AWS = require('aws-sdk');
const s3 = new AWS.S3();

const save = async (favNumber) => {
  console.log("saving");
  await s3.putObject({
    Body: JSON.stringify(favNumber, null,2),
    Bucket: "cyclic-plain-marlin-us-west-2",
    Key: "number.json"
  }).promise();
  // fs.writeFile(
  //   path.join(__dirname, ".", "number.json"),
  //   JSON.stringify(favNumber, null, 2),
  //   (error) => {
  //     if (error) {
  //       throw error;
  //     }
  //   }
  // );
};

module.exports = { save };
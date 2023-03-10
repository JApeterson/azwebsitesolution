import { DynamoDBClient, UpdateItemCommand } from "@aws-sdk/client-dynamodb";

const client = new DynamoDBClient({
  credentials: {
    accessKeyId: process.env.ACCESS_KEY,
    secretAccessKey: process.env.SECRET_ACCESS_KEY,
  },
  region: process.env.REGION,
});

export default async function handler(req, res) {
  try {
    const { method } = req;
    const { firstName, lastName, email } = req.body;
    if (method === "POST") {
      const { Attributes } = await client.send(
        new UpdateItemCommand({
          TableName: "Users",
          Key: {
            UserId: { S: email },
          },
          UpdateExpression: "set FirstName = :fn, Email = :e, LastName = :ln",
          ExpressionAttributeValues: {
            ":fn": { S: firstName },
            ":e": { S: email },
            ":ln": { S: lastName },
          },
          ReturnValues: "ALL_NEW",
        })
      );

      return res.status(200).json(Attributes);
    }
  } catch (err) {
    console.log("api-email-registration: ", err);
  }
}

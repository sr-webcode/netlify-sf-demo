import { Context, APIGatewayProxyEvent } from "aws-lambda";

exports.handler = async (event: APIGatewayProxyEvent, context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({ msg: "hello there!" }),
  };
};

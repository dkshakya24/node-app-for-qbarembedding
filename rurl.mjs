import {
  QuickSightClient,
  GenerateEmbedUrlForRegisteredUserCommand,
} from "@aws-sdk/client-quicksight";
(async () => {
  const client = new QuickSightClient({ region: "us-east-1" });
  const command = new GenerateEmbedUrlForRegisteredUserCommand({
    AwsAccountId: "603640115098",
    UserArn:
      "arn:aws:quicksight:us-east-1:603640115098:user/default/deepak.kumar",
    ExperienceConfiguration: {
      GenerativeQnA: {
        InitialTopicId: "kjhkjhjh",
      },
    },
    // AllowedDomains: ["http://localhost:5173/"],
    SessionLifetimeInMinutes: 600,
  });
  const response = await client.send(command);
  console.log(response.EmbedUrl);
})();

import {
  QuickSightClient,
  GenerateEmbedUrlForRegisteredUserCommand,
  GenerateEmbedUrlForAnonymousUserCommand,
} from "@aws-sdk/client-quicksight";
(async () => {
  const client = new QuickSightClient({ region: "us-west-2" });
  const command = new GenerateEmbedUrlForAnonymousUserCommand({
    AwsAccountId: "603640115098",
    Namespace: "default",
    // UserArn:
    //   "arn:aws:quicksight:us-west-2:603640115098:user/default/deepak.kumar",
    AuthorizedResourceArns: [
      "aws:quicksight:us-west-2:603640115098:topic/FMVUKOH5zvquqy5C6Rv0mTFPwfTtpSO5",
    ],
    ExperienceConfiguration: {
      QSearchBar: {
        InitialTopicId: "FMVUKOH5zvquqy5C6Rv0mTFPwfTtpSO5",
      },
    },
    AllowedDomains: ["http://localhost:5173/"],
  });
  const response = await client.send(command);
  console.log(response.EmbedUrl);
})();

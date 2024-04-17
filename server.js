const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port

// Define API endpoints here (example)
app.get("/api/data", (req, res) => {
  // Simulate some data
  (async () => {
    const client = new QuickSightClient({ region: "us-west-2" });
    const command = new GenerateEmbedUrlForRegisteredUserCommand({
      AwsAccountId: "603640115098",
      UserArn:
        "arn:aws:quicksight:us-west-2:603640115098:user/default/deepak.kumar",
      ExperienceConfiguration: {
        QNRESearchBar: {
          InitialTopicId: "kjhkjhjh",
        },
      },
      // AllowedDomains: ["http://localhost:5173/"],
      SessionLifetimeInMinutes: 600,
    });
    res = await client.send(command);
    console.log(res.EmbedUrl, "response URL");
    res.json(res);
  })();
  //   const data = { message: "Hello from the API!" };
  //   res.json(data); // Send data as JSON
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

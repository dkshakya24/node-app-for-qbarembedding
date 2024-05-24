const express = require("express");
const {
  QuickSightClient,
  GenerateEmbedUrlForRegisteredUserCommand,
} = require("@aws-sdk/client-quicksight");

const app = express();
const cors = require("cors");

const port = process.env.PORT || 3000; // Use environment variable or default port
app.use(cors());
// Define API endpoints here (example)
app.get("/api/data", (req, res) => {
  // Simulate some data
  const data = { message: "Hello from the API!" };

  res.json(data); // Send data as JSON
});
app.get("/generate-embed-url", async (req, res) => {
  try {
    // Create QuickSight client
    const client = new QuickSightClient({ region: "us-east-1" });

    // Construct command
    const command = new GenerateEmbedUrlForRegisteredUserCommand({
      AwsAccountId: "603640115098",
      UserArn:
        "arn:aws:quicksight:us-west-1:603640115098:user/default/deepak.kumar",
      ExperienceConfiguration: {
        QNRESearchBar: {
          InitialTopicId: "kjhkjhjh",
        },
      },
      // AllowedDomains: ['http://localhost:5173/'],
      SessionLifetimeInMinutes: 600,
    });

    // Send command and await response
    const response = await client.send(command);

    // Send embed URL in the response
    res.json({ embedUrl: response.EmbedUrl });
  } catch (error) {
    // Handle errors
    console.error("Error generating embed URL:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

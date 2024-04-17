const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Use environment variable or default port

// Define API endpoints here (example)
app.get("/api/data", (req, res) => {
  // Simulate some data
  const data = { message: "Hello from the API!" };

  res.json(data); // Send data as JSON
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

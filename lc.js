// Replace "YOUR_USERNAME" with your LeetCode username
const graphqlQuery = `
{
  matchedUser(username: "TirthPShah") {
    username
    submitStats: submitStatsGlobal {
      acSubmissionNum {
        difficulty
        count
        submissions
      }
    }
  }
}
`;

// Define the GraphQL endpoint
const graphqlEndpoint = "https://leetcode.com/graphql";

// Define the request options
const requestOptions = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ query: graphqlQuery }),
};

// Send the request to the GraphQL API
fetch(graphqlEndpoint, requestOptions)
  .then((response) => response.json())
  .then((data) => {
    // Handle the response data here
    console.log(data.data.matchedUser.submitStats.acSubmissionNum);
    console.log(JSON.stringify({ query: graphqlQuery }))
  })
  .catch((error) => {
    console.error("Error:", error);
  });

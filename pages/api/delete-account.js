export default async function handler(req, res) {
  if (req.method === "POST") {
    const { email, reason, confirmation } = req.body;

    // TODO: Implement the logic to handle the deletion request
    // For example, send an email, log the request, or store it in a database

    console.log("Email:", email);
    console.log("Reason:", reason);
    console.log("Confirmed:", confirmation);

    res.status(200).json({ message: "Request received" });
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}

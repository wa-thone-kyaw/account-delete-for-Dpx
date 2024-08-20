import { useState } from "react";
import "../styles/globals.css";
export default function DeleteAccount() {
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [confirmation, setConfirmation] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/delete-account", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, reason, confirmation }),
    });

    if (response.ok) {
      alert("Account deletion request received.");
    } else {
      alert("Something went wrong.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="max-w-lg w-full bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-4 text-center">
          Dpx Express - Account Deletion
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Email Address:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">
              Reason for Deletion (optional):
            </label>
            <textarea
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              className="w-full mt-2 p-2 border border-gray-300 rounded-lg"
            />
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={confirmation}
                onChange={(e) => setConfirmation(e.target.checked)}
                required
                className="form-checkbox h-5 w-5 text-blue-600"
              />
              <span className="ml-2 text-gray-700">
                I confirm that I want to delete my account and all associated
                data.
              </span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-red-500 text-white p-2 rounded-lg hover:bg-red-600"
          >
            Submit Request
          </button>
        </form>
      </div>
      <footer className="mt-8 text-gray-600">
        <p>Powered by Kone Lone Shin</p>
      </footer>
    </div>
  );
}

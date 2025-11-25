import React from "react";

function BugList({ bugs, changeStatus, removeBug }) {
  if (bugs.length === 0)
    return <p className="text-center text-gray-500">No bugs reported yet.</p>;

  return (
    <div className="space-y-4">
      {bugs.map((bug) => (
        <div key={bug._id} className="bg-white p-4 rounded shadow flex justify-between items-center">
          <div>
            <h3 className="font-bold text-lg">{bug.title}</h3>
            <p>{bug.description}</p>
            <p className="text-sm text-gray-500">Status: {bug.status}</p>
          </div>
          <div className="space-x-2">
            {bug.status !== "resolved" && (
              <button
                onClick={() =>
                  changeStatus(
                    bug._id,
                    bug.status === "open" ? "in-progress" : "resolved"
                  )
                }
                className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500"
              >
                {bug.status === "open" ? "In Progress" : "Resolve"}
              </button>
            )}
            <button
              onClick={() => removeBug(bug._id)}
              className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BugList;

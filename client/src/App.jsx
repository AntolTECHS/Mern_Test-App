import React, { useState, useEffect } from "react";
import BugForm from "./components/BugForm";
import BugList from "./components/BugList";
import ErrorBoundary from "./components/ErrorBoundary";
import { getBugs, createBug, updateBug, deleteBug } from "./api";

function App() {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    const data = await getBugs();
    setBugs(data);
  };

  useEffect(() => {
    fetchBugs();
  }, []);

  const addBug = async (bug) => {
    const newBug = await createBug(bug);
    setBugs([...bugs, newBug]);
  };

  const changeStatus = async (id, status) => {
    const updated = await updateBug(id, status);
    setBugs(bugs.map((b) => (b._id === id ? updated : b)));
  };

  const removeBug = async (id) => {
    await deleteBug(id);
    setBugs(bugs.filter((b) => b._id !== id));
  };

  return (
    <ErrorBoundary>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">Bug Tracker</h1>
        <BugForm addBug={addBug} />
        <BugList bugs={bugs} changeStatus={changeStatus} removeBug={removeBug} />
      </div>
    </ErrorBoundary>
  );
}

export default App;

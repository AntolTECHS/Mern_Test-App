import Bug from "../models/Bug.js";

// GET /api/bugs
export const getBugs = async (req, res, next) => {
  try {
    const bugs = await Bug.find();
    res.json(bugs);
  } catch (error) {
    next(error);
  }
};

// POST /api/bugs
export const createBug = async (req, res, next) => {
  try {
    const { title, description, status } = req.body;
    const bug = new Bug({ title, description, status });
    await bug.save();
    res.status(201).json(bug);
  } catch (error) {
    next(error);
  }
};

// PUT /api/bugs/:id
export const updateBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    const bug = await Bug.findByIdAndUpdate(id, { status }, { new: true });
    if (!bug) return res.status(404).json({ message: "Bug not found" });
    res.json(bug);
  } catch (error) {
    next(error);
  }
};

// DELETE /api/bugs/:id
export const deleteBug = async (req, res, next) => {
  try {
    const { id } = req.params;
    const bug = await Bug.findByIdAndDelete(id);
    if (!bug) return res.status(404).json({ message: "Bug not found" });
    res.json({ message: "Bug deleted" });
  } catch (error) {
    next(error);
  }
};

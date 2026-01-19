import { useState } from "react";
import { nanoid } from "nanoid";

export default function AddCard({ columnId, setData }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({
    position: "",
    company: "",
    location: "",
    workMode: "remote",
    salaryRange: "",
  });

  function handleAdd() {
    if (!form.position || !form.company) return;

    const id = nanoid();

    setData((prev) => ({
      ...prev,
      cards: {
        ...prev.cards,
        [id]: { id, ...form },
      },
      columns: {
        ...prev.columns,
        [columnId]: {
          ...prev.columns[columnId],
          cardIds: [...prev.columns[columnId].cardIds, id],
        },
      },
    }));

    setForm({
      position: "",
      company: "",
      location: "",
      workMode: "remote",
      salaryRange: "",
    });
    setOpen(false);
  }

  if (!open)
    return (
      <button
        onClick={() => setOpen(true)}
        className="text-sm bg-white hover:bg-purple-200 text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-purple-300 rounded-2xl cursor-pointer px-4 py-2"
      >
        <i className="bi bi-plus"></i> Add card
      </button>
    );

  return (
    <div className="space-y-2">
      {/* Position */}
      <input
        className="text-sm text-slate-900 border border-slate-200 hover:border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-200 rounded-lg w-full p-2"
        placeholder="Position"
        value={form.position}
        onChange={(e) => setForm({ ...form, position: e.target.value })}
      />

      {/* Company */}
      <input
        className="text-sm text-slate-900 border border-slate-200 hover:border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-200 rounded-lg w-full p-2"
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      {/* Location */}
      <input
        className="text-sm text-slate-900 border border-slate-200 hover:border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-200 rounded-lg w-full p-2"
        placeholder="Location (e.g. Berlin, Germany)"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      {/* Work Mode */}
      <select
        className="text-sm text-slate-900 border border-slate-200 hover:border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-200 rounded-lg w-full p-2"
        value={form.workMode}
        onChange={(e) => setForm({ ...form, workMode: e.target.value })}
      >
        <option value="remote">Remote</option>
        <option value="onsite">On-site</option>
        <option value="hybrid">Hybrid</option>
      </select>

      {/* Salary Range */}
      <input
        className="text-sm text-slate-900 border border-slate-200 hover:border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-purple-200 rounded-lg w-full p-2"
        placeholder="Salary Range (e.g. $80k–$100k)"
        value={form.salaryRange}
        onChange={(e) => setForm({ ...form, salaryRange: e.target.value })}
      />

      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          className="text-sm bg-purple-200 hover:bg-purple-300 text-slate-900 border border-purple-300 rounded-2xl cursor-pointer px-4 py-2"
        >
          Add
        </button>
        <button
          onClick={() => setOpen(false)}
          className="text-sm bg-white hover:bg-purple-200 text-slate-500 hover:text-slate-900 border border-slate-200 hover:border-purple-300 rounded-2xl cursor-pointer px-4 py-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

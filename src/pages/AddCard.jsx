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
        className="text-sm bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-md cursor-pointer px-4 py-2"
      >
        <i className="bi bi-plus"></i> Add card
      </button>
    );

  return (
    <div className="space-y-2">
      {/* Position */}
      <input
        className="text-sm text-stone-800 border border-stone-200 hover:border-stone-300 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 rounded-md w-full p-2"
        placeholder="Position"
        value={form.position}
        onChange={(e) => setForm({ ...form, position: e.target.value })}
      />

      {/* Company */}
      <input
        className="text-sm text-stone-800 border border-stone-200 hover:border-stone-300 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 rounded-md w-full p-2"
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      {/* Location */}
      <input
        className="text-sm text-stone-800 border border-stone-200 hover:border-stone-300 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 rounded-md w-full p-2"
        placeholder="Location (e.g. Berlin, Germany)"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      {/* Work Mode */}
      <select
        className="text-sm text-stone-800 border border-stone-200 hover:border-stone-300 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 rounded-md w-full p-2"
        value={form.workMode}
        onChange={(e) => setForm({ ...form, workMode: e.target.value })}
      >
        <option value="remote">Remote</option>
        <option value="onsite">On-site</option>
        <option value="hybrid">Hybrid</option>
      </select>

      {/* Salary Range */}
      <input
        className="text-sm text-stone-800 border border-stone-200 hover:border-stone-300 focus:border-stone-400 focus:outline-none focus:ring-2 focus:ring-stone-200 rounded-md w-full p-2"
        placeholder="Salary Range (e.g. $80k–$100k)"
        value={form.salaryRange}
        onChange={(e) => setForm({ ...form, salaryRange: e.target.value })}
      />

      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          className="text-sm bg-stone-950 hover:bg-stone-900 text-stone-50 rounded-md cursor-pointer px-4 py-2"
        >
          Add
        </button>
        <button
          onClick={() => setOpen(false)}
          className="text-sm bg-stone-50 hover:bg-stone-100 text-stone-800 border border-stone-300 rounded-md cursor-pointer px-4 py-2"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

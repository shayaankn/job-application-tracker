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
        className="mt-3 text-sm text-gray-600 hover:text-black"
      >
        + Add card
      </button>
    );

  return (
    <div className="mt-3 space-y-2">
      {/* Position */}
      <input
        className="w-full p-1 border rounded"
        placeholder="Position"
        value={form.position}
        onChange={(e) => setForm({ ...form, position: e.target.value })}
      />

      {/* Company */}
      <input
        className="w-full p-1 border rounded"
        placeholder="Company"
        value={form.company}
        onChange={(e) => setForm({ ...form, company: e.target.value })}
      />

      {/* Location */}
      <input
        className="w-full p-1 border rounded"
        placeholder="Location (e.g. Berlin, Germany)"
        value={form.location}
        onChange={(e) => setForm({ ...form, location: e.target.value })}
      />

      {/* Work Mode */}
      <select
        className="w-full p-1 border rounded"
        value={form.workMode}
        onChange={(e) => setForm({ ...form, workMode: e.target.value })}
      >
        <option value="remote">Remote</option>
        <option value="onsite">On-site</option>
        <option value="hybrid">Hybrid</option>
      </select>

      {/* Salary Range */}
      <input
        className="w-full p-1 border rounded"
        placeholder="Salary Range (e.g. $80k–$100k)"
        value={form.salaryRange}
        onChange={(e) => setForm({ ...form, salaryRange: e.target.value })}
      />

      <div className="flex gap-2">
        <button
          onClick={handleAdd}
          className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
        >
          Add
        </button>
        <button
          onClick={() => setOpen(false)}
          className="text-sm text-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

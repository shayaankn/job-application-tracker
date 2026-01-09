import { useDroppable } from "@dnd-kit/core";

export default function Trash({ visible = false }) {
  const { isOver, setNodeRef } = useDroppable({ id: "trash" });

  const baseClasses =
    "fixed bottom-24 left-1/2 transform -translate-x-1/2 bg-gray-50 border rounded-md shadow-lg transition-all p-3";
  const visibleClass = visible
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";
  const overClass = isOver
    ? "bg-red-50 text-red-600 border-red-300 scale-110"
    : "text-gray-600 border-gray-300";

  return (
    <div
      ref={setNodeRef}
      className={`${baseClasses} ${visibleClass} ${overClass}`}
      aria-hidden={!visible}
    >
      <i className="bi bi-trash text-xl"></i>
    </div>
  );
}

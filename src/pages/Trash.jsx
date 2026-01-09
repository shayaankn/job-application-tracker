import { useDroppable } from "@dnd-kit/core";

export default function Trash({ visible = false }) {
  const { isOver, setNodeRef } = useDroppable({ id: "trash" });

  // ...existing styles...
  const baseClasses =
    "fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-50 border border-gray-300 rounded-full shadow-lg transition-all p-3";
  const visibleClass = visible
    ? "opacity-100 pointer-events-auto"
    : "opacity-0 pointer-events-none";
  const overClass = isOver
    ? "bg-red-50 text-red-600 scale-110"
    : "text-gray-600";

  return (
    <div
      ref={setNodeRef}
      className={`${baseClasses} ${visibleClass} ${overClass}`}
      aria-hidden={!visible}
    >
      <i className="bi bi-trash text-2xl"></i>
    </div>
  );
}

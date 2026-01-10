import { useDroppable } from "@dnd-kit/core";

export default function Trash({ visible = false }) {
  const { isOver, setNodeRef } = useDroppable({ id: "trash" });

  const baseClasses =
    "fixed bottom-16 left-1/2 transform -translate-x-1/2 transition-all";
  const visibleClass = visible
    ? "opacity-100 pointer-events-auto cursor-pointer"
    : "opacity-0 pointer-events-none";

  return (
    <div
      ref={setNodeRef}
      className={`${baseClasses} ${visibleClass}`}
      aria-hidden={!visible}
    >
      {/* Detection area */}
      <div className="w-24 h-16 flex items-center justify-center">
        {/* Actual visible button */}
        <div
          className={`w-12 h-12 flex items-center justify-center rounded-md border shadow
            ${
              isOver
                ? "bg-red-50 text-red-600 border-red-300 scale-110"
                : "bg-stone-50 text-stone-600 border-stone-300"
            }
            transition-transform`}
        >
          <i className="bi bi-trash text-xl"></i>
        </div>
      </div>
    </div>
  );
}

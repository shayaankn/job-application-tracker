import { useDraggable } from "@dnd-kit/core";

export default function Card({ card, columnId, setData }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: { columnId },
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  function handleDelete(e) {
    e.stopPropagation();

    setData((prev) => {
      const newCards = { ...prev.cards };
      delete newCards[card.id];

      return {
        ...prev,
        cards: newCards,
        columns: {
          ...prev.columns,
          [columnId]: {
            ...prev.columns[columnId],
            cardIds: prev.columns[columnId].cardIds.filter(
              (id) => id !== card.id
            ),
          },
        },
      };
    });
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="bg-gray-50 border border-gray-300 rounded-md p-3 mb-3 flex items-center justify-between"
    >
      {/* Drag handle */}
      <div
        {...listeners}
        {...attributes}
        className="cursor-grab flex-shrink-0 mr-2"
      >
        <i className="bi bi-grip-vertical text-gray-400"></i>
      </div>

      {/* Card details */}
      <div className="flex-1">
        <h3 className="font-semibold text-gray-800 mb-1">{card.position}</h3>
        <p className="text-gray-600 text-sm mb-1">
          <i class="bi bi-buildings-fill text-gray-400 text-xs mr-2"></i>
          {card.company}
        </p>
        <p className="text-gray-600 text-sm mb-1">
          <i class="bi bi-geo-alt-fill text-gray-400 text-xs mr-2"></i>
          {card.location} • {card.workMode}
        </p>
        <p className="text-gray-600 text-sm">
          <i class="bi bi-wallet-fill text-gray-400 text-xs mr-2"></i>
          {card.salaryRange}
        </p>
      </div>

      {/* Delete button */}
      <button
        onClick={handleDelete}
        className="cursor-pointer flex-shrink-0 text-red-500 hover:text-red-700 ml-2"
      >
        <i class="bi bi-x"></i>
      </button>
    </div>
  );
}

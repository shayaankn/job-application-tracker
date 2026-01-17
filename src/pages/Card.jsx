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
    e.preventDefault();

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
      {...listeners}
      {...attributes}
      style={style}
      className="relative bg-stone-50 border border-stone-300 rounded-md p-4 mb-3"
    >
      <button
        onClick={handleDelete}
        onPointerDown={(e) => {
          e.stopPropagation();
        }}
        className="absolute top-2 right-2 text-stone-600 hover:text-red-600 cursor-pointer p-1"
        aria-label="Delete card"
        title="Delete"
      >
        <i className="bi bi-trash"></i>
      </button>
      <h3 className="font-semibold text-stone-800 mb-2">{card.position}</h3>
      <p className="text-stone-600 text-sm mb-2">
        <i className="bi bi-building-fill text-xs mr-2"></i>
        {card.company}
      </p>
      <p className="text-stone-600 text-sm mb-2">
        <i className="bi bi-geo-alt-fill text-xs mr-2"></i>
        {card.location} • {card.workMode}
      </p>
      <p className="text-stone-600 text-sm">
        <i className="bi bi-bank2 text-xs mr-2"></i>
        {card.salaryRange}
      </p>
    </div>
  );
}

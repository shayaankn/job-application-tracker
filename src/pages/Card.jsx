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

  function move(direction) {
    setData((prev) => {
      const columnsOrder = Array.isArray(prev.columnOrder)
        ? prev.columnOrder
        : Object.keys(prev.columns);
      const idx = columnsOrder.indexOf(columnId);
      if (idx === -1) return prev;
      const targetIndex = direction === "left" ? idx - 1 : idx + 1;
      if (targetIndex < 0 || targetIndex >= columnsOrder.length) return prev;
      const targetColumnId = columnsOrder[targetIndex];
      if (targetColumnId === columnId) return prev;

      const newData = structuredClone(prev);
      newData.columns[columnId].cardIds = newData.columns[
        columnId
      ].cardIds.filter((id) => id !== card.id);
      newData.columns[targetColumnId].cardIds.push(card.id);
      return newData;
    });
  }

  function handleMoveLeft(e) {
    e.stopPropagation();
    move("left");
  }
  function handleMoveRight(e) {
    e.stopPropagation();
    move("right");
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className="relative bg-stone-50 border border-stone-300 rounded-md pt-4 px-4 pb-8 mb-3"
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

      {/* Left/right move buttons (small screens) */}
      <div className="md:hidden absolute bottom-0 left-1/2 -translate-x-1/2 flex gap-2">
        <button
          onClick={handleMoveLeft}
          onPointerDown={(e) => e.stopPropagation()}
          className="text-stone-500 hover:text-stone-700 cursor-pointer"
          aria-label="Move left"
          title="Move left"
        >
          <i className="bi bi-arrow-left"></i>
        </button>
        <button
          onClick={handleMoveRight}
          onPointerDown={(e) => e.stopPropagation()}
          className="text-stone-500 hover:text-stone-700 cursor-pointer"
          aria-label="Move right"
          title="Move right"
        >
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>

      {/* Drag handle (md+ screens) */}
      <div
        {...listeners}
        {...attributes}
        className="hidden md:flex absolute bottom-0 left-1/2 -translate-x-1/2 text-stone-500 hover:text-stone-700 cursor-grab active:cursor-grabbing"
        role="button"
        aria-label="Drag handle"
        title="Drag"
      >
        <i className="bi bi-grip-horizontal"></i>
      </div>
    </div>
  );
}

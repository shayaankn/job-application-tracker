import { useDraggable } from "@dnd-kit/core";

export default function Card({ card, columnId }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: card.id,
    data: { columnId },
  });

  const style = {
    transform: transform
      ? `translate(${transform.x}px, ${transform.y}px)`
      : undefined,
  };

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
      className="bg-gray-50 border border-gray-300 rounded-md p-3 mb-3 cursor-pointer"
    >
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
  );
}

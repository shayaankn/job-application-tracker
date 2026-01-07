import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";
import AddCard from "./AddCard";

export default function Column({ column, cards, setData }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: { columnId: column.id },
  });

  return (
    <div ref={setNodeRef} className="flex flex-col w-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        {column.title}
      </h2>

      {/* <div className="flex-1 space-y-3"> */}
      <div className="space-y-3">
        {cards.map((card) => (
          <Card
            key={card.id}
            card={card}
            columnId={column.id}
            setData={setData}
          />
        ))}
      </div>

      <AddCard columnId={column.id} setData={setData} />
    </div>
  );
}

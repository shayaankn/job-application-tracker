import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";
import AddCard from "./AddCard";

export default function Column({ column, cards, setData }) {
  const { setNodeRef } = useDroppable({
    id: column.id,
    data: { columnId: column.id },
  });

  return (
    <div ref={setNodeRef} className="flex flex-col min-w-[200px] w-100">
      <h2 className="text-lg font-semibold text-stone-800 mb-4">
        {column.title}{" "}
        <span className="text-sm text-stone-600">
          ({Array.isArray(cards) ? cards.length : 0})
        </span>
      </h2>

      {/* <div className="flex-1 space-y-3"> */}
      <div>
        {cards.map((card) => (
          <Card
            key={card.id}
            columnId={column.id}
            card={card}
            setData={setData}
          />
        ))}
      </div>

      <AddCard columnId={column.id} setData={setData} />
    </div>
  );
}

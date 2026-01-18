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
      <h2 className="text-lg font-semibold text-slate-900 flex items-center gap-2 mb-4">
        <span className="whitespace-nowrap">{column.title}</span>

        <span
          className="
            inline-flex items-center justify-center
            min-w-[1.5rem] h-6
            rounded-md
            bg-purple-100 text-slate-600
            border border-purple-200
            text-xs font-medium
          "
        >
          {Array.isArray(cards) ? cards.length : 0}
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

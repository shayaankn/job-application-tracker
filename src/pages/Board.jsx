import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import { initialData } from "../data/initialData";
import Column from "./Column";
import Trash from "./Trash";

export default function Board() {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("job-board");
    return saved ? JSON.parse(saved) : initialData;
  });

  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    localStorage.setItem("job-board", JSON.stringify(data));
  }, [data]);

  function handleDragStart() {
    setIsDragging(true);
  }

  function handleDragCancel() {
    setIsDragging(false);
  }

  function handleDragEnd(event) {
    const { active, over } = event;
    setIsDragging(false);

    if (!over) return;

    // If dropped on trash -> delete the card
    if (over.id === "trash") {
      const fromColumn = active.data.current.columnId;
      const cardId = active.id;

      setData((prev) => {
        const newCards = { ...prev.cards };
        delete newCards[cardId];

        return {
          ...prev,
          cards: newCards,
          columns: {
            ...prev.columns,
            [fromColumn]: {
              ...prev.columns[fromColumn],
              cardIds: prev.columns[fromColumn].cardIds.filter(
                (id) => id !== cardId
              ),
            },
          },
        };
      });

      return;
    }

    const fromColumn = active.data.current.columnId;
    const toColumn = over.data.current.columnId;

    if (fromColumn === toColumn) return;

    setData((prev) => {
      const newData = structuredClone(prev);

      newData.columns[fromColumn].cardIds = newData.columns[
        fromColumn
      ].cardIds.filter((id) => id !== active.id);

      newData.columns[toColumn].cardIds.push(active.id);

      return newData;
    });
  }

  return (
    <section className="min-h-screen bg-stone-100 p-6">
      <h1 className="text-2xl font-semibold text-stone-800 mb-1">
        Job Application Tracker
      </h1>
      <p className="text-stone-600 text-sm mb-6">
        All your job applications, organized in one place.
      </p>
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <div className="flex gap-4 overflow-x-auto">
          {Object.values(data.columns).map((column) => (
            <Column
              key={column.id}
              column={column}
              cards={column.cardIds.map((id) => data.cards[id])}
              setData={setData}
            />
          ))}
        </div>

        <Trash visible={isDragging} />
      </DndContext>
    </section>
  );
}

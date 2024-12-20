'use client';

export default function DeleteButton({
  deleteItemAction,
  id,
}: {
  deleteItemAction: (id: number) => Promise<void>;
  id: number;
}) {
  return <button onClick={async () => deleteItemAction(id)}>X</button>;
}

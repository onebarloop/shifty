import DeleteButton from "@/app/ui/event/delete-task";

export default function Task({ name, id }: { name: string, id: number }) {
  return <li className="flex gap-2">
    <span>{name}</span>
    <DeleteButton id={id}/>
  </li>;
}

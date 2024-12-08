import { getAllEvents } from "@/app/db/query";
import Link from "next/link";

export default async function Events() {
  const data = await getAllEvents();

  return (
    <ul className="flex flex-col gap-2">
      {data.map((item) => (
        <li key={item.id}>
          <Link href={`/${item.uuid}`}> {item.name}</Link>
        </li>
      ))}
    </ul>
  );
}

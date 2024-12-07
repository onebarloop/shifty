import { getEvent } from "@/app/db/query";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const [event] = await getEvent(slug);

  return (
    <>
      <div>Event: {event?.name}</div>
    </>
  );
}

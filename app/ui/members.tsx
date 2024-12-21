import MemberForm from '@/app/ui/forms/member-form';

export default function Members({
  timeslotId,
  members,
}: {
  timeslotId: number;
  members: { id: number; name: string }[];
}) {
  return (
    <>
      {members.map((member) => (
        <span key={member.id}>{member.name} </span>
      ))}
      <MemberForm timeslotId={timeslotId} />
    </>
  );
}

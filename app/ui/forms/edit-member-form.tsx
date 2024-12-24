import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteMember, updateMember } from '@/app/lib/actions';
import { Member } from '@/app/interfaces/interfaces';

export default function EditMemberForm({
  member,
  onSubmit,
}: {
  member: Member;
  onSubmit: (arg: boolean) => void;
}) {
  const updateMemberWithId = updateMember.bind(null, member.id);
  return (
    <>
      <form action={updateMemberWithId} onSubmit={() => onSubmit(false)}>
        <Label htmlFor="name">Edit Member</Label>
        <Input name="name" id="name" type="text" defaultValue={member.name} />
        <Button type="submit">Submit</Button>
      </form>
      <DeleteButton deleteItemAction={deleteMember} id={member.id} />
    </>
  );
}

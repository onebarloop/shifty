'use client';

import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteMember, updateMember } from '@/app/lib/actions';
import { Member } from '@/app/interfaces/interfaces';
import { Trash2 } from 'lucide-react';
import { useActionState, useEffect } from 'react';

export default function EditMemberForm({
  member,
  onSubmit,
}: {
  member: Member;
  onSubmit: () => void;
}) {
  /*  const updateMemberWithId = updateMember.bind(null,member.id)*/

  const [state, action, isPending] = useActionState(
    updateMember,
    'INITIAL_STATE'
  );

  useEffect(() => {
    if (state === 'test') {
      onSubmit();
    }
  });

  return (
    <>
      <form className="flex flex-col gap-2" action={action}>
        <input
          readOnly
          id="id"
          name="id"
          className="hidden"
          value={member.id}
        />
        <Label htmlFor="name">Edit Member</Label>
        <Input name="name" id="name" type="text" defaultValue={member.name} />

        <div className="flex justify-between">
          <Button type="submit">Edit</Button>
          <DeleteButton deleteItemAction={deleteMember} id={member.id}>
            <Button>
              <Trash2 />
            </Button>
          </DeleteButton>
        </div>
      </form>
    </>
  );
}

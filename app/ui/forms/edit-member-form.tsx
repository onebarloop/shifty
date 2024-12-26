import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import DeleteButton from '@/app/ui/buttons/delete-button';
import { deleteMember, updateMember } from '@/app/lib/actions';
import { Member } from '@/app/interfaces/interfaces';
import { Trash2 } from 'lucide-react';
import { useActionState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function EditMemberForm({
  member,
  closeForm,
}: {
  member: Member;
  closeForm: () => void;
}) {
  const [state, action, pending] = useActionState(updateMember, undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (state) {
      toast({
        title: 'Update Member',
        description: state.message,
      });
    }
    if (state?.success) {
      closeForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <>
      <form className="flex flex-col gap-2" action={action}>
        <input
          readOnly
          name="id"
          type="hidden"
          value={member.id}
        />
        <Label htmlFor="name">Edit Member</Label>
        <Input name="name" id="name" type="text" defaultValue={member.name} />

        <div className="flex justify-between">
          <Button type="submit" disabled={pending}>Edit</Button>
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

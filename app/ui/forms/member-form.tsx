'use client';

import { createMember } from '@/app/lib/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useActionState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function MemberForm({
  timeslotId,
  closeDialog,
}: {
  timeslotId: number;
  closeDialog: () => void;
}) {
  const [state, action] = useActionState(createMember, undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (state) {
      toast({
        title: 'Add Member',
        description: state.message,
      });
    }
    if (state?.success) {
      closeDialog();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);
  return (
    <form className="flex flex-col gap-2" action={action}>
      <input type="hidden" name="id" readOnly value={timeslotId} />
      <Label htmlFor="name">Name</Label>
      <Input name="name" id="name" type="text" />
      <Button type="submit">Add</Button>
    </form>
  );
}

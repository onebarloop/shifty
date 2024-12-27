import { createTimeslot } from '@/app/lib/actions';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useActionState, useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';

export default function TimeslotForm({
  taskId,
  closeDialog,
}: {
  taskId: number;
  closeDialog: () => void;
}) {
  const [state, action, pending] = useActionState(createTimeslot, undefined);
  const { toast } = useToast();

  useEffect(() => {
    if (state) {
      toast({
        title: 'Add timeslot',
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
      <input type="hidden" name="id" value={taskId} readOnly />
      <Label htmlFor="from">From</Label>
      <Input name="from" id="from" type="number" />
      <Label htmlFor="to">To</Label>
      <Input name="to" id="to" type="number" />
      <Button disabled={pending} type="submit">
        Add Timeslot
      </Button>
    </form>
  );
}

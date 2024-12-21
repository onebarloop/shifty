'use client';

import { useState } from 'react';
import TimeslotForm from '@/app/ui/forms/timeslot-form';
import MemberForm from '@/app/ui/forms/member-form';

export default function FormWrapper({
  id,
  type,
}: {
  id: number;
  type: 'slot' | 'member';
}) {
  const [childCount, setChildCount] = useState(0);
  const addChildCount = () => setChildCount(childCount + 1);
  const reduceChildCount = () =>
    childCount > 0 && setChildCount(childCount - 1);

  const typeMap = {
    slot: TimeslotForm,
    member: MemberForm,
  };

  const FormComponent = typeMap[type];

  return (
    <>
      <div className="flex gap-2">
        <button onClick={addChildCount}>+</button>
        <button onClick={reduceChildCount}>-</button>
      </div>
      {[...Array(childCount)].map((_, i) => (
        <FormComponent onSubmit={() => reduceChildCount()} id={id} key={i} />
      ))}
    </>
  );
}

import type { Member } from '@/app/interfaces/interfaces';

export default function Member({ member }: { member: Member }) {
  return <li className="inline">{member.name} </li>;
}

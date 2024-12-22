import type { Member } from '@/app/interfaces/interfaces';
import { Badge } from '@/components/ui/badge';

export default function Member({ member }: { member: Member }) {
  return <Badge>{member.name}</Badge>;
}

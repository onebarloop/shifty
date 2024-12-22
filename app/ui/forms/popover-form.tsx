import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';

export default function PopoverForm({
  text = 'Popover',
  children,
}: {
  text: string;
  children: React.ReactNode;
}) {
  return (
    <Popover>
      <PopoverTrigger>{text}</PopoverTrigger>
      <PopoverContent>{children}</PopoverContent>
    </Popover>
  );
}

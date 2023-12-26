import { ScrollArea } from "../../src/components/ui/scroll-area";

export default function TransitionLayout(props: { children: React.ReactNode }) {
  return (
    <ScrollArea className="flex flex-col overflow-y-auto">
      {props.children}
    </ScrollArea>
  );
}

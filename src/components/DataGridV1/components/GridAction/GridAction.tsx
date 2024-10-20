import { Button } from "@/components/ui/button";
import { ChevronRightIcon } from "@radix-ui/react-icons";
export default function GridAction() {
  return (
    <div className="px-4 flex items-center justify-center w-full gap-3">
      <Button variant="outline" size="icon">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
      <Button variant="outline" size="default">
        <ChevronRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
}

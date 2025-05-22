
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface RoomFeatureProps {
  feature: string;
  className?: string;
}

const RoomFeature = ({ feature, className }: RoomFeatureProps) => {
  return (
    <div className={cn("flex items-center text-sm", className)}>
      <Check className="h-4 w-4 mr-2 text-emerald-500" />
      <span>{feature}</span>
    </div>
  );
};

export default RoomFeature;

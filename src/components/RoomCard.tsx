
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Room } from "@/data/rooms";
import RoomFeature from "./RoomFeature";

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative h-48 sm:h-64">
        <img
          src={room.image}
          alt={room.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4">
          {room.isBooked ? (
            <Badge variant="destructive">Booked</Badge>
          ) : (
            <Badge variant="secondary">Available</Badge>
          )}
        </div>
      </div>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold">{room.name}</h3>
            <p className="text-muted-foreground text-sm mt-1">{room.description}</p>
          </div>
          <div className="text-right">
            <p className="text-2xl font-bold">${room.price}</p>
            <p className="text-xs text-muted-foreground">per night</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-2">
          {room.features.slice(0, 4).map((feature) => (
            <RoomFeature key={feature} feature={feature} />
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-end">
        <button 
          disabled={room.isBooked}
          className={`px-4 py-2 rounded ${
            room.isBooked
              ? "bg-gray-300 cursor-not-allowed"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {room.isBooked ? "Not Available" : "Book Now"}
        </button>
      </CardFooter>
    </Card>
  );
};

export default RoomCard;

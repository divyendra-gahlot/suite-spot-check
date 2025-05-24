
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Room } from "@/data/rooms";
import RoomFeature from "./RoomFeature";
import { useNavigate } from "react-router-dom";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";

interface RoomCardProps {
  room: Room;
}

const RoomCard = ({ room }: RoomCardProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate();

  const handleCardClick = (e: React.MouseEvent) => {
    // Check if the click is on a carousel control button
    const target = e.target as HTMLElement;
    const isCarouselControl = target.closest('button[data-carousel-control]');
    
    if (!isCarouselControl) {
      navigate(`/room/${room.id}`);
    }
  };

  // Auto-change images every 3 seconds
  useEffect(() => {
    const totalImages = (room.additionalImages?.length || 0) + 1; // +1 for the main image
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 3000);
    
    return () => clearInterval(interval);
  }, [room.additionalImages]);

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:scale-105 duration-300">
      <div onClick={handleCardClick} className="cursor-pointer">
        <div className="relative h-48 sm:h-64">
          <Carousel 
            className="w-full"
            value={currentIndex}
            onValueChange={setCurrentIndex}
          >
            <CarouselContent>
              <CarouselItem key={room.image}>
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-48 sm:h-64 object-cover"
                />
              </CarouselItem>
              {room.additionalImages?.map((image, index) => (
                <CarouselItem key={index}>
                  <img
                    src={image}
                    alt={`${room.name} view ${index + 1}`}
                    className="w-full h-48 sm:h-64 object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious 
              className="absolute left-2 h-8 w-8"
              data-carousel-control="true"
              onClick={(e) => e.stopPropagation()}
              variant="outline"
            />
            <CarouselNext 
              className="absolute right-2 h-8 w-8"
              data-carousel-control="true"
              onClick={(e) => e.stopPropagation()}
              variant="outline"
            />
          </Carousel>
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
            {room.features.length > 4 && (
              <p className="text-sm text-blue-600 col-span-2 mt-1">
                +{room.features.length - 4} more features
              </p>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex justify-end">
          <span
            className={`px-4 py-2 rounded ${
              room.isBooked
                ? "bg-gray-300 text-gray-600"
                : "bg-blue-600 text-white hover:bg-blue-700"
            }`}
          >
            {room.isBooked ? "Not Available" : "View Details"}
          </span>
        </CardFooter>
      </div>
    </Card>
  );
};

export default RoomCard;


import { useParams, Link } from "react-router-dom";
import { rooms } from "@/data/rooms";
import { Button } from "@/components/ui/button";
import RoomFeature from "@/components/RoomFeature";
import { ArrowLeft } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";

const RoomDetails = () => {
  const { id } = useParams();
  const room = rooms.find((r) => r.id === id);

  if (!room) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Room not found</h2>
          <Link to="/">
            <Button>Back to Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center text-blue-600 mb-6 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to all rooms
        </Link>
        
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative">
            <Carousel className="w-full max-h-[500px]">
              <CarouselContent>
                <CarouselItem key="main-image">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-[500px] object-cover"
                  />
                </CarouselItem>
                {room.additionalImages?.map((image, index) => (
                  <CarouselItem key={index}>
                    <img
                      src={image}
                      alt={`${room.name} view ${index + 1}`}
                      className="w-full h-[500px] object-cover"
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4" />
              <CarouselNext className="right-4" />
            </Carousel>
            <div className="absolute top-4 right-4">
              {room.isBooked ? (
                <Badge variant="destructive" className="text-lg px-4 py-2">Booked</Badge>
              ) : (
                <Badge variant="secondary" className="text-lg px-4 py-2">Available</Badge>
              )}
            </div>
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900">{room.name}</h1>
                <p className="text-lg text-gray-600 mt-2">{room.description}</p>
              </div>
              <div className="mt-4 md:mt-0 text-right">
                <p className="text-3xl font-bold text-blue-600">${room.price}</p>
                <p className="text-gray-600">per night</p>
              </div>
            </div>
            
            <div className="border-t border-gray-200 py-6">
              <h2 className="text-2xl font-semibold mb-4">Description</h2>
              <p className="text-gray-700 leading-relaxed">
                {room.fullDescription || room.description}
              </p>
            </div>
            
            <div className="border-t border-gray-200 py-6">
              <h2 className="text-2xl font-semibold mb-4">Room Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {room.features.map((feature) => (
                  <RoomFeature key={feature} feature={feature} className="py-2" />
                ))}
              </div>
            </div>
            
            <div className="border-t border-gray-200 pt-6">
              <Button 
                disabled={room.isBooked}
                className="w-full md:w-auto text-lg py-6" 
                size="lg"
              >
                {room.isBooked ? "Not Available" : "Book Now"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;

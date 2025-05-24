
import RoomCard from "@/components/RoomCard";
import { Room } from "@/data/rooms";
import { motion } from "framer-motion";

interface RoomsSectionProps {
  rooms: Room[];
}

const RoomsSection = ({ rooms }: RoomsSectionProps) => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <motion.div
            key={room.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RoomCard room={room} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default RoomsSection;

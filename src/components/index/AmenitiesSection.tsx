
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface Amenity {
  name: string;
  description: string;
  icon: ReactNode;
}

interface AmenitiesSectionProps {
  amenities: Amenity[];
}

const AmenitiesSection = ({ amenities }: AmenitiesSectionProps) => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Hotel Amenities</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {amenities.map((amenity, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 text-center h-full flex flex-col items-center">
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{amenity.name}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AmenitiesSection;

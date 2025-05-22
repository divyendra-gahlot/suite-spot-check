
import Hero from "@/components/Hero";
import RoomCard from "@/components/RoomCard";
import { rooms } from "@/data/rooms";
import { Wifi, Shield, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const Index = () => {
  const amenities = [
    {
      name: "High-Speed WiFi",
      description: "Free high-speed internet throughout the property",
      icon: <Wifi className="h-8 w-8 text-blue-600" />,
    },
    {
      name: "24/7 Security",
      description: "CCTV surveillance and security personnel round the clock",
      icon: <Shield className="h-8 w-8 text-blue-600" />,
    },
    {
      name: "Water Purifier",
      description: "Purified drinking water available in all areas",
      icon: <Check className="h-8 w-8 text-blue-600" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      
      {/* Rooms Section */}
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
      
      {/* Amenities Section */}
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
      
      {/* Contact Section */}
      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our rooms or services? Reach out to us and our team will be happy to assist you.
                </p>
                
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </div>
              
              <div className="bg-blue-600 p-8 lg:p-12 text-white flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                
                <div className="space-y-4">
                  <div>
                    <p className="font-semibold">Address</p>
                    <p>123 Luxury Avenue, Beachfront</p>
                    <p>Paradise City, PC 12345</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Email</p>
                    <p>info@luxuryrooms.example</p>
                  </div>
                  
                  <div>
                    <p className="font-semibold">Hours</p>
                    <p>24/7 Front Desk</p>
                    <p>Check-in: 2:00 PM, Check-out: 11:00 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

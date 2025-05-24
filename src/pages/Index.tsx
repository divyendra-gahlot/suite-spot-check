
import Hero from "@/components/Hero";
import RoomsSection from "@/components/index/RoomsSection";
import AmenitiesSection from "@/components/index/AmenitiesSection";
import LocationSection from "@/components/index/LocationSection";
import ContactSection from "@/components/index/ContactSection";
import { rooms } from "@/data/rooms";
import { Wifi, Shield, Check } from "lucide-react";

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
      <RoomsSection rooms={rooms} />
      <AmenitiesSection amenities={amenities} />
      <LocationSection />
      <ContactSection />
    </div>
  );
};

export default Index;

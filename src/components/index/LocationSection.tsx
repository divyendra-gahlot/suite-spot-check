
import { Button } from "@/components/ui/button";
import { Map, MapPin } from "lucide-react";
import { useState } from "react";

const LocationSection = () => {
  const [mapboxToken, setMapboxToken] = useState<string>("");
  
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">Our Location</h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <MapPin className="h-6 w-6 text-blue-600 mr-2" />
              <h3 className="text-xl font-semibold">Hotel Address</h3>
            </div>
            <p className="text-gray-700 mb-4">
              123 Luxury Avenue, Beachfront<br />
              Paradise City, PC 12345
            </p>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2 flex items-center">
                <Map className="h-5 w-5 text-blue-600 mr-2" />
                Nearby Places
              </h4>
              <ul className="space-y-2 text-gray-700">
                <li>• City Center - 1.2 km</li>
                <li>• Beach - 0.5 km</li>
                <li>• Shopping Mall - 3 km</li>
                <li>• Airport - 15 km</li>
              </ul>
            </div>
            
            <div className="mt-6">
              <h4 className="font-semibold mb-2">Getting Here</h4>
              <p className="text-gray-700 mb-2">
                From the airport: Take the express shuttle or a taxi directly to the hotel.
              </p>
              <p className="text-gray-700">
                Public transport: Bus routes 42 and 57 stop nearby.
              </p>
            </div>
          </div>
          
          <div className="md:w-2/3">
            {!mapboxToken ? (
              <div className="bg-gray-100 p-6 rounded-lg shadow-md flex flex-col items-center justify-center h-[400px]">
                <h3 className="text-xl font-semibold mb-4">Map View</h3>
                <p className="text-gray-700 text-center mb-6">
                  To view the interactive map, please enter your Mapbox API token:
                </p>
                <input
                  type="text"
                  placeholder="Enter Mapbox token"
                  className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-md mb-4"
                  value={mapboxToken}
                  onChange={(e) => setMapboxToken(e.target.value)}
                />
                <Button 
                  className="bg-blue-600 hover:bg-blue-700"
                  disabled={!mapboxToken}
                >
                  Load Map
                </Button>
                <p className="text-xs text-gray-500 mt-4 text-center max-w-md">
                  You can get a free Mapbox token by signing up at mapbox.com
                </p>
              </div>
            ) : (
              <div className="rounded-lg shadow-lg overflow-hidden h-[400px] bg-blue-50 flex items-center justify-center">
                <p className="text-gray-700">Map will load here with your Mapbox token</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationSection;

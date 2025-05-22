
export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  isBooked: boolean;
  image: string;
  features: string[];
}

export const rooms: Room[] = [
  {
    id: "deluxe",
    name: "Deluxe Suite",
    description: "Spacious suite with king-size bed and city view",
    price: 299,
    isBooked: false,
    image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["King Bed", "Free WiFi", "55\" Smart TV", "Mini Bar", "Room Service"]
  },
  {
    id: "executive",
    name: "Executive Room",
    description: "Elegant room with work desk and premium amenities",
    price: 199,
    isBooked: true,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Queen Bed", "Work Desk", "Free WiFi", "Coffee Machine"]
  },
  {
    id: "family",
    name: "Family Suite",
    description: "Perfect for families with separate living area",
    price: 399,
    isBooked: false,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["2 Queen Beds", "Sofa Bed", "Kitchenette", "2 Bathrooms", "Kids Area"]
  },
  {
    id: "standard",
    name: "Standard Room",
    description: "Comfortable and cozy room for budget travelers",
    price: 119,
    isBooked: false,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["Queen Bed", "Free WiFi", "TV", "Air Conditioning"]
  },
  {
    id: "penthouse",
    name: "Penthouse Suite",
    description: "Luxury penthouse with panoramic views and private terrace",
    price: 599,
    isBooked: true,
    image: "https://images.unsplash.com/photo-1602595183435-323ee4a46e19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["King Bed", "Private Terrace", "Jacuzzi", "Living Room", "Private Chef", "Butler Service"]
  },
  {
    id: "ocean",
    name: "Ocean View",
    description: "Beautiful room with stunning ocean views",
    price: 349,
    isBooked: false,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    features: ["King Bed", "Balcony", "Ocean View", "Mini Bar", "Premium Toiletries"]
  }
];

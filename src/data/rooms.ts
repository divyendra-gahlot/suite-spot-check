
export interface Room {
  id: string;
  name: string;
  description: string;
  price: number;
  isBooked: boolean;
  image: string;
  additionalImages?: string[];
  features: string[];
  fullDescription?: string;
}

export const rooms: Room[] = [
  {
    id: "deluxe",
    name: "Spacious Studio Appartment with Garden View",
    description: "Double/Triple Occupancy",
    price: 7999,
    isBooked: false,
    image: "/lovable-uploads/82e641ea-9a24-4732-8dfa-6d6676919b2b.png",
    additionalImages: [
      "/lovable-uploads/0e060fab-e513-48b4-8f13-50d7d0276e45.png",
      "/lovable-uploads/42d10e26-6723-4e0c-8285-fa20e2b88c36.png",
      "/lovable-uploads/b0b8eec7-aff5-46a4-a2f3-4010a66f8817.png",
      "/lovable-uploads/6842e536-553a-4f54-ae9a-dd252cc4e9bc.png",
      "/lovable-uploads/a9b310d4-471c-4a97-92b8-6cca7b8944f0.png",
      "/lovable-uploads/a73793cf-cc52-47c4-ba50-ad0586f7d45c.png"
    ],
    features: ["Bright & Airy", "Attached Washroom", "Private Kitchen Setup", "Spacious & Furnished", "High-Speed WiFi", "Water Purifier", "24x7 CCTV Surveillance", "Safe Neighbourhood", "Power Backup", "Utility Aangan"],
    fullDescription: "🪟 Bright & Airy: Well-ventilated room with ample natural sunlight and cooling breeze—perfect for summers.\\n🚿 Attached Washroom: Comes with a clean, private in-room washroom for added comfort.\\n🧑‍🍳 Private Kitchen Setup: Includes a dedicated kitchen area for convenient cooking.\\n🛏️ Spacious & Furnished: Fully furnished with a bed, study table, and chair—ideal for both comfort and productivity.\\n📶 High-Speed WiFi: Seamless internet access for work or entertainment.\\n💧 Water Purifier: Clean drinking water available at all times.\\n🎥 24x7 CCTV Surveillance: Constant security monitoring for peace of mind.\\n🌇 Safe Neighbourhood: Located in a secure and friendly locality.\\n🔌 Power Backup: Uninterrupted electricity with reliable backup support.\\n🪣 Utility Aangan: Designated space for washing utensils and drying clothes."
  },
  {
    id: "executive",
    name: "Executive Room",
    description: "Elegant room with work desk and premium amenities",
    price: 15999,
    isBooked: true,
    image: "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Queen Bed", "Work Desk", "Free WiFi", "Coffee Machine", "Ergonomic Chair", "Laptop Safe", "Rainfall Shower"],
    fullDescription: "Our Executive Room is designed for the discerning business traveler. With a dedicated work area featuring an ergonomic chair and ample desk space, you can stay productive while away from the office. High-speed WiFi and multiple power outlets ensure you remain connected, while premium amenities offer comfort after a long day."
  },
  {
    id: "family",
    name: "Family Suite",
    description: "Perfect for families with separate living area",
    price: 25999,
    isBooked: false,
    image: "https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["2 Queen Beds", "Sofa Bed", "Kitchenette", "2 Bathrooms", "Kids Area", "Game Console", "Children's Books", "Family Movies", "Child-Safe Balcony"],
    fullDescription: "Our Family Suite is specially designed to accommodate families of all sizes. The spacious layout includes separate sleeping areas for parents and children, ensuring everyone has their space. The kitchenette allows for simple meal preparation, while the designated kids' area with games and activities will keep the little ones entertained."
  },
  {
    id: "standard",
    name: "Standard Room",
    description: "Comfortable and cozy room for budget travelers",
    price: 8999,
    isBooked: false,
    image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["Queen Bed", "Free WiFi", "TV", "Air Conditioning", "Work Desk", "Shower"],
    fullDescription: "Our Standard Room offers everything you need for a comfortable stay without breaking the bank. These cozy rooms feature quality furnishings, a comfortable queen bed, and all the essential amenities to ensure a pleasant stay. Perfect for solo travelers or couples looking for value without compromising on comfort."
  },
  {
    id: "penthouse",
    name: "Penthouse Suite",
    description: "Luxury penthouse with panoramic views and private terrace",
    price: 45999,
    isBooked: true,
    image: "https://images.unsplash.com/photo-1602595183435-323ee4a46e19?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["King Bed", "Private Terrace", "Jacuzzi", "Living Room", "Private Chef", "Butler Service", "Wine Cellar", "Home Theater", "Panoramic Views", "Private Bar"],
    fullDescription: "The pinnacle of luxury, our Penthouse Suite offers an unparalleled experience with breathtaking panoramic views from your private terrace. This expansive suite features a master bedroom with a premium king-size bed, a separate living area with designer furniture, and a dining space perfect for entertaining. Indulge in the exclusive services of a private butler and chef for a truly bespoke experience."
  },
  {
    id: "ocean",
    name: "Ocean View",
    description: "Beautiful room with stunning ocean views",
    price: 29999,
    isBooked: false,
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    additionalImages: [
      "https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    ],
    features: ["King Bed", "Balcony", "Ocean View", "Mini Bar", "Premium Toiletries", "Lounge Chair", "Telescope", "Sunset View", "Direct Beach Access"],
    fullDescription: "Wake up to the soothing sounds of waves in our Ocean View room. Floor-to-ceiling windows showcase the magnificent seascape, while the private balcony offers the perfect spot to enjoy the sunrise with your morning coffee or witness spectacular sunsets with a glass of wine. The contemporary design and comfortable furnishings complement the natural beauty outside."
  }
];

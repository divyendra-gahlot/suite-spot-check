
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-900 to-indigo-900 text-white">
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="relative mx-auto max-w-7xl px-4 py-24 sm:py-32 md:flex md:items-center md:justify-between md:px-6 lg:px-8">
        <div className="md:w-2/3">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Discover Your Perfect Stay
          </motion.h1>
          <motion.p 
            className="mt-4 max-w-xl text-lg sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Explore our luxurious rooms and suites designed for comfort and relaxation. Find the perfect accommodation for your needs.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

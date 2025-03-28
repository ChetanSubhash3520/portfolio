import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      {/* Centered heading */}
      <h2 className="my-4 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      
      {/* Centered content container */}
      <div className="flex flex-wrap justify-center">
        {/* Left column (empty in your case) - removed since not used */}
        
        {/* Right column with centered text */}
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full px-4 lg:w-2/3" // Adjusted width for better centering
        >
          <div className="flex justify-center">
            <p className="my-2 max-w-2xl py-6 text-center"> {/* Changed to text-center */}
              {ABOUT_TEXT}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
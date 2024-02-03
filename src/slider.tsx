import React from "react";

import { motion } from "framer-motion";
import image1 from "./assets/shoeyellow.png";

import image2 from "./assets/shoered.png";

import image3 from "./assets/shoeblue.png";

export default function Slider() {
  const data = [
    {
      name: "blue",
      bg: "#4A64ED",
      image: image3,
    },

    {
      name: "red",
      bg: "#FF5A5A",
      image: image2,
    },

    {
      name: "yellow",
      bg: "#FFCE6D",
      image: image1,
    },
  ];

  const containerVariants = {
    initial: {
      flex: 1,
    },

    tap: {
      flex: 9,
      transition: {
        duration: 0.7,
        ease: "easeInOut",
        type: "spring",
      },
    },
  };

  const textVariants = {
    initial: {
      fontSize: "200px",
    },
    tap: {
      fontSize: "600px",
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const imageVariants = {
    initial: {
      rotate: -40,
    },
    tap: {
      rotate: 5,
      scale: 1.2,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className="flex h-screen">
      {data.map((i) => {
        return (
          <motion.div
            whileTap={"tap"}
            initial={"initial"}
            variants={containerVariants}
            key={i.name}
            className="flex flex-1 relative justify-center items-center overflow-hidden"
            style={{
              backgroundColor: `${i.bg}`,
            }}
          >
            <motion.h1
              variants={textVariants}
              className="text-white font-extrabold uppercase font-mon"
            >
              {i.name}
            </motion.h1>

            <motion.div className="absolute">
              <motion.img variants={imageVariants} src={i.image} alt={i.name} />
            </motion.div>
          </motion.div>
        );
      })}
    </div>
  );
}

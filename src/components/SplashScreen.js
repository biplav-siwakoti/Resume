import React from 'react';
import { motion } from 'framer-motion';
import './SplashScreen.css';

const SplashScreen = () => {
  return (
    <motion.div 
      className="splash"
      exit={{ opacity: 0, scale: 1.02 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="splash-logo"
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
      >
        BS
      </motion.div>
      
      <motion.div 
        className="splash-text"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        Biplav & Co.
      </motion.div>
      
      <motion.div 
        className="splash-sub"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        LOADING WORKPAPERS...
      </motion.div>
      
      <motion.div 
        className="splash-loader"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
      >
        <motion.div 
          className="splash-loader-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        />
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;

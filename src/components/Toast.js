import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Toast.css';

const Toast = ({ show, message }) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div className="toast" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 20, opacity: 0 }}>
          {message}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Toast;

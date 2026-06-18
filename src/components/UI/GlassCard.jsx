import { motion } from 'framer-motion';

export const GlassCard = ({ children, className = "" }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className={`glass rounded-3xl p-5 ${className}`}
  >
    {children}
  </motion.div>
);
import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, AlertTriangle } from 'lucide-react';

interface SourceBadgeProps {
  isRenewable: boolean;
  className?: string;
}

const SourceBadge: React.FC<SourceBadgeProps> = ({ isRenewable, className = '' }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium ${
        isRenewable
          ? 'bg-green-600/20 text-green-400 border border-green-500/30'
          : 'bg-orange-600/20 text-orange-400 border border-orange-500/30'
      } ${className}`}
    >
      {isRenewable ? (
        <>
          <Leaf className="h-4 w-4 mr-2" />
          Fonte Renovável
        </>
      ) : (
        <>
          <AlertTriangle className="h-4 w-4 mr-2" />
          Fonte Não Renovável
        </>
      )}
    </motion.div>
  );
};

export default SourceBadge;
import { motion } from "framer-motion";

import React, { ReactNode } from "react";

const IconHoverMotion = ({ children }: { children: ReactNode }) => {
    return (
        <motion.div className="box" whileHover={{ scale: 1.3 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}>
            {children}
        </motion.div>
    );
};

export default IconHoverMotion;
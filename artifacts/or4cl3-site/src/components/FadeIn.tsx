import { motion, HTMLMotionProps } from 'framer-motion';

interface FadeInProps extends HTMLMotionProps<"div"> {
  delay?: number;
  yOffset?: number;
}

export function FadeIn({ children, delay = 0, className = '', yOffset = 24, ...props }: FadeInProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export const StaggerContainer = ({ children, className = '', ...props }: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        show: {
          opacity: 1,
          transition: { staggerChildren: 0.1 }
        }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const StaggerItem = ({ children, className = '', ...props }: HTMLMotionProps<"div">) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

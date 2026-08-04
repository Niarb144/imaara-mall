import { Transition } from "framer-motion";

export const carouselTransition: Transition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1],
};

export const springTransition: Transition = {
  type: "spring",
  stiffness: 120,
  damping: 22,
};
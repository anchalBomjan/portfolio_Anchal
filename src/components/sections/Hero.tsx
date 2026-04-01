import { motion, useScroll, useTransform } from 'framer-motion';
import type { FC } from 'react';

export const Hero: FC = () => {
    const { scrollYProgress } = useScroll();
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const imageUrl = import.meta.env.BASE_URL + 'images/cvanchal.png';
    const cvUrl = import.meta.env.BASE_URL + 'pdf/anchallama-cv.pdf';

    return (
        <section id="hero" className="min-h-[calc(100vh-4rem)] sm:min-h-screen flex flex-col items-start sm:items-center justify-center text-left sm:text-center relative overflow-hidden pt-16 sm:pt-0 px-4 sm:px-0">
            <motion.div style={{ y }} className="w-full flex flex-col items-start sm:items-center justify-center">
                <motion.div
                    className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, type: 'spring', stiffness: 120 }}
                >
                    <motion.div
                        className="absolute inset-0 rounded-full border-2 border-accent dark:border-dark-accent transition-colors duration-300"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                    />
                    <motion.img
                        src={imageUrl}
                        alt="Anchal Lama"
                        className="w-full h-full object-cover rounded-full p-1"
                        animate={{
                            scale: [1, 1.05, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    />
                </motion.div>
                <motion.h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-highlight dark:text-white mb-2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                   Anchal Lama
                </motion.h1>
                <motion.p
                    className="text-base sm:text-lg md:text-xl lg:text-2xl text-secondary-text dark:text-dark-highlight mb-8 px-4 sm:px-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    Full-Stack | .NET,Angular & Flutter
                </motion.p>
                <motion.div
                    className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <motion.a
                        href={cvUrl}
                        download
                        className="bg-accent text-white dark:bg-dark-accent dark:text-dark-background font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 hover:opacity-90 shadow-lg text-sm sm:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            scale: [1, 1.03, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        Download CV
                    </motion.a>
                    <motion.a
                        href="#projects"
                        className="border-2 border-accent text-accent dark:border-dark-accent dark:text-dark-accent font-bold py-2.5 px-6 sm:py-3 sm:px-8 rounded-full transition-all duration-300 hover:bg-accent hover:text-white dark:hover:bg-dark-accent dark:hover:text-dark-background shadow-lg text-sm sm:text-base"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        animate={{
                            scale: [1, 1.03, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                        }}
                    >
                        View Project
                    </motion.a>
                </motion.div>
            </motion.div>
        </section>
    );
};

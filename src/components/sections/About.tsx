import { motion } from 'framer-motion';
import type { FC } from 'react';
import { badges } from '../../../constants';
import { SectionWrapper } from '../ui/SectionWrapper';

const BadgeCard: FC<{ badge: typeof badges[0] }> = ({ badge }) => (
    <div className="group relative flex flex-col items-center text-center">
        <motion.div
            className="w-24 h-24 rounded-full bg-secondary dark:bg-dark-secondary flex items-center justify-center transition-all duration-300 group-hover:bg-accent dark:group-hover:bg-dark-accent shadow-md"
            whileHover={{ scale: 1.1, rotate: 5 }}
        >
            <badge.icon className="text-5xl text-highlight dark:text-dark-highlight group-hover:text-white dark:group-hover:text-dark-background transition-colors duration-300" />
        </motion.div>
        <h4 className="mt-4 font-bold text-highlight dark:text-white">{badge.name}</h4>
        <div className="absolute top-full mt-2 w-40 sm:w-48 p-3 bg-secondary dark:bg-dark-secondary rounded-lg shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10 left-1/2 -translate-x-1/2">
            <p className="text-xs sm:text-sm text-secondary-text dark:text-dark-highlight">{badge.description}</p>
        </div>
    </div>
);


export const About: FC = () => {
    return (
        <SectionWrapper id="about">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-highlight dark:text-white mb-12">
                About Me
            </h2>
            <p className="max-w-3xl mx-auto text-center text-lg md:text-xl leading-relaxed mb-20 text-secondary-text dark:text-dark-highlight">
                Full-Stack developer with experience in large-scale internal systems, secure RESTful APIs, legacy systems modernization and responsive interfaces. It operates throughout the software lifecycle, from analysis to delivery.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-center text-highlight dark:text-white mb-12">
                Achievements
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
                {badges.map((badge, index) => (
                    <BadgeCard key={index} badge={badge} />
                ))}
            </div>
        </SectionWrapper>
    );
};

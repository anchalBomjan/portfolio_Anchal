import { AnimatePresence, motion } from 'framer-motion';
import { type FC, type MouseEvent, useEffect, useState } from 'react';
import { ThemeToggle } from '../ui/ThemeToggle';

const navItems = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
];

export const Header: FC = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        setMobileMenuOpen(false);
        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <motion.header
            className={`fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-background/80 dark:bg-dark-background/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
        >
            <nav className="w-full max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-3 sm:py-4 flex justify-between items-center">
                <a
                  href="#hero"
                  onClick={(e) => handleNavClick(e, '#hero')}
                  className="text-sm sm:text-lg md:text-xl font-bold text-highlight dark:text-dark-highlight hover:text-accent dark:hover:text-dark-accent transition-colors flex items-center whitespace-nowrap shrink-0"
                >
                  <code>&lt;/anchallama&gt;</code>
                </a>
                <div className="flex items-center gap-2 sm:gap-4 md:gap-8 shrink-0">
                    <ul className="hidden md:flex space-x-8">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="text-highlight dark:text-dark-highlight hover:text-accent dark:hover:text-dark-accent transition-colors font-medium"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-[5px]"
                        aria-label="Toggle menu"
                    >
                        <motion.span
                            className="block w-6 h-[2.5px] rounded-full bg-highlight dark:bg-dark-highlight"
                            animate={mobileMenuOpen ? { rotate: 45, y: 7.5 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block w-6 h-[2.5px] rounded-full bg-highlight dark:bg-dark-highlight"
                            animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                            transition={{ duration: 0.3 }}
                        />
                        <motion.span
                            className="block w-6 h-[2.5px] rounded-full bg-highlight dark:bg-dark-highlight"
                            animate={mobileMenuOpen ? { rotate: -45, y: -7.5 } : { rotate: 0, y: 0 }}
                            transition={{ duration: 0.3 }}
                        />
                    </button>
                </div>
            </nav>
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden overflow-hidden bg-background/95 dark:bg-dark-background/95 backdrop-blur-sm"
                    >
                        <ul className="flex flex-col items-center py-4 space-y-4">
                            {navItems.map((item) => (
                                <li key={item.name}>
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="text-lg text-highlight dark:text-dark-highlight hover:text-accent dark:hover:text-dark-accent transition-colors font-medium"
                                    >
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
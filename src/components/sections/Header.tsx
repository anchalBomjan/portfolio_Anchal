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
            className={`fixed top-0 left-0 right-0 z-50 w-full overflow-x-hidden transition-all duration-300 ${scrolled || mobileMenuOpen ? 'bg-background dark:bg-dark-background shadow-lg' : 'bg-transparent'}`}
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
                <div className="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
                    <ul className="hidden md:flex items-center space-x-3">
                        {navItems.map((item) => (
                            <li key={item.name}>
                                <a
                                    href={item.href}
                                    onClick={(e) => handleNavClick(e, item.href)}
                                    className="rounded-full border border-transparent bg-secondary/80 px-4 py-2 text-sm font-medium text-highlight dark:bg-dark-secondary/80 dark:text-dark-highlight hover:border-accent hover:bg-accent/10 dark:hover:border-dark-accent dark:hover:bg-dark-accent/10 transition-colors duration-200"
                                >
                                    {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <ThemeToggle />
                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="md:hidden relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-secondary/90 p-2 text-highlight shadow-lg transition-colors duration-200 hover:bg-secondary dark:border-white/10 dark:bg-dark-secondary/90 dark:text-dark-highlight dark:hover:bg-dark-secondary pointer-events-auto"
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden fixed inset-x-0 top-16 z-50 pointer-events-auto overflow-auto bg-background/95 dark:bg-dark-background/95 backdrop-blur-xl shadow-2xl border-t border-gray-200/70 dark:border-white/10"
                    >
                        <ul className="flex flex-col items-center justify-start min-h-[calc(100vh-4rem)] px-6 py-10 gap-5">
                            {navItems.map((item) => (
                                <li key={item.name} className="w-full max-w-sm">
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleNavClick(e, item.href)}
                                        className="block w-full rounded-full px-5 py-4 text-center text-lg font-semibold text-highlight dark:text-dark-highlight transition-colors duration-200 hover:bg-accent/10 dark:hover:bg-dark-accent/10"
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
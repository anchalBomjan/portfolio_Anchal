import type { FC } from 'react';

export const Footer: FC = () => {
    return (
        <footer className="bg-gray-100 dark:bg-dark-secondary/50 py-4 mt-auto">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center text-secondary-text dark:text-dark-highlight">
                <p className="text-sm text-center">&copy; {new Date().getFullYear()}Anchal Lama. All rights reserved.</p>
            </div>
        </footer>
    );
};
import type { Metadata } from 'next';
import { galleryItems } from '@/data/gallery-images';

export const metadata: Metadata = {
    title: 'Engineering Diagrams & Site Images | KV Engineering Solutions',
    description: 'Explore our collection of detailed engineering diagrams, site trenches, cable trays, transformer yards, and installation photos.',
    openGraph: {
        title: 'Engineering Diagrams & Site Images | KV Engineering Solutions',
        description: 'Detailed gallery of engineering works including cable trenches, transformer yards, and more.',
        images: [
            {
                url: '/diagrams/20150919_113750.jpg', // Using a representative image
                width: 800,
                height: 600,
                alt: 'Cable Trench Area',
            },
        ],
    },
};

export default function ImagesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            {children}
        </>
    );
}

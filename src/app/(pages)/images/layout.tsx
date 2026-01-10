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
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'ImageGallery',
        name: 'KV Engineering Solutions Site Images',
        description: 'A gallery of engineering site photos, cable trenches, and installation diagrams.',
        image: galleryItems.map((item) => ({
            '@type': 'ImageObject',
            url: `https://www.ksvengineering.com${item.url}`,
            name: item.name,
            caption: item.name,
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </>
    );
}

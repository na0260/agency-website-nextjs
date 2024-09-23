export async function generateMetadata() {
    return {
        title: "Agency Website | Testimonials",
        description: "Agency Website by Next.js",
        keywords: "Agency, Website, Next.js",
    };
}

export default function TestimonialsLayout({ children }) {
    return(
        <div>
            {children}
        </div>
    );
}
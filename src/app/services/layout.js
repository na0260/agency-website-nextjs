export async function generateMetadata() {
    return {
        title: "Agency Website | Services",
        description: "Agency Website by Next.js",
        keywords: "Agency, Website, Next.js",
    };
}

export default function ServicesLayout({ children }) {
    return(
        <div>
            {children}
        </div>
    );
}
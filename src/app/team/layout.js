export async function generateMetadata() {
    return {
        title: "Agency Website | Teams",
        description: "Agency Website by Next.js",
        keywords: "Agency, Website, Next.js",
    };
}

export default function TeamLayout({ children }) {
    return(
        <div>
            {children}
        </div>
    );
}
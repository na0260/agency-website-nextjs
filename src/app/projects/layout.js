export async function generateMetadata() {
    return {
        title: "Agency Website | Projects",
        description: "Agency Website by Next.js",
        keywords: "Agency, Website, Next.js",
    };
}

export default function ProjectsLayout({ children }) {
    return(
        <div>
            {children}
        </div>
    );
}
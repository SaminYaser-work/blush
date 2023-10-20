import Heading from "./Heading";

interface SectionProps {
    heading?: string;
    children: React.ReactNode;
    fullWidth?: boolean;
    className?: string;
}

export default function Section({ children, heading, fullWidth = false, className='' }: SectionProps) {
    return (
        <section className={`${fullWidth ? 'w-full' : 'container'} my-28 mx-auto ${className}`}>
            {heading && <Heading heading={heading} />}
            {children}
        </section>
    );
}

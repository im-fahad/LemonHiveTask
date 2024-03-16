interface containerTypes {
    children: React.ReactNode,
    className?: string,
    innerClass?: string,
}

export default function Container(
    {children, className, innerClass}: containerTypes) {
    return (
        <div className={`lh-container ${className}`}>
            <div className={`lh-container__inner ${innerClass}`}>
                {children}
            </div>
        </div>
    );
}

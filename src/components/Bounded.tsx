type BoundedProps = {
    as?: React.ElementType;
    children:React.ReactNode;
}

export default function Bounded({
    as: Comp = "section",
    children,
    ...restProps
}: BoundedProps) {
    return (
        <Comp {...restProps}>
            <div>
                {children}
            </div>
        </Comp>
    )
}
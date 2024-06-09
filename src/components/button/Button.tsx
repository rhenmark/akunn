import { PropsWithChildren } from "react"

interface ButtonProps extends PropsWithChildren {
    classNames?: {
        root?: string
    };
    onClick: () => void
}

const Button = (props: ButtonProps) => {
    const {classNames} = props
    return (
        <button className={classNames?.root}>{props.children}</button>
    )
}

export default Button
type Props = {
    redirect: string
    children: React.ReactNode
}

const Button = ({ redirect, children }: Props) => {
    return (
        <button onClick={() => { window.open(`${redirect}`, '_blank'); }}>{children}</button>
    )
}

export default Button
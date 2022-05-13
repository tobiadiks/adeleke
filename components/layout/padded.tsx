const PaddedLayout = (props: { children: React.ReactNode }) => {
    return (
        <div className="bg-transparent px-4 py-4">
            {props.children}
        </div>
    )
}
export default PaddedLayout
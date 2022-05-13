const MainLayout = (props: { children: React.ReactNode }) => {
    return (
        <div className="bg-gray-100 font-monument px-4   lg:px-8">
            {props.children}
        </div>
    )
}
export default MainLayout
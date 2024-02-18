import AddToFeed from "../Cards/AddToFeed"
import Footer from "../Footer"

const SidebarRight = () => {
    return (
        <div className="flex flex-col h-full overflow-y-auto">
            <AddToFeed />
            <Footer/>
        </div>
    )
}

export default SidebarRight
import ManageNetworkCard from "../Cards/ManageMyNetwork"
import ProfileCard from "../Cards/ProfileCard"

const MyNetworkSidebar = () => {
    return (
        <div className="flex flex-col h-full items-end overflow-y-auto">
            {/* <ProfileCard /> */}
            <ManageNetworkCard />
        </div>
    )
}

export default MyNetworkSidebar
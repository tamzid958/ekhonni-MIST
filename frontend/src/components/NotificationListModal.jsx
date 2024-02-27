import NotificationListItem from "@/components/NotificationListItem";


const NotificationListModal = ({setModalOpen}) => {

    const notificationList = [
        {id : "1",
         message : "Your product has been approved",
         link : "link",
         buttonText: "Go to your products",
         time : "3:52 PM"},
        {id : "2",
         message : "Your product has been sold",
         link : "link",
         buttonText: "Go to your products",
         time : "4:35 PM"},
        {id : "3",
         message : "Your bid has been selected",
         link : "link",
         buttonText: "Go to your bids",
         time : "5:09 PM"},
        {id : "4",
         message : "Your product has been approved",
         link : "link",
         buttonText: "Go to your products",
         time : "6:15 PM"},
        {id : "5",
         message : "Your product has been rejected",
         link : "link",
         buttonText: "Go to your products",
         time : "7:30 PM"}
    ]
    //const noNotifications = notificationList.length === 0;
    const noNotifications = false;
    const handleClearAll = () => {

    }
    return (
        <div className="flex flex-col items-end justify-start w-fit h-auto max-h-72 absolute z-10 top-16 right-28 m-3">
            {!noNotifications &&
                (<>

                    <ul className=" bg-white list-none overflow-hidden hover:overflow-y-scroll border border-neutral-300 flex flex-col justify-start items-start rounded-lg shadow-md shadow-slate-400">
                        {notificationList.map((notification) => (
                            <NotificationListItem key={notification.id} message={notification.message}
                                                  link={notification.link} buttonText={notification.buttonText}
                                                  time={notification.time}/>
                        ))}
                    </ul>
                    <button className="text-black px-2 py-0.5 mt-1 mr-1 border border-neutral-300 shadow-md shadow-slate-400 text-md bg-white rounded-full  transition duration-500 hover:scale-[103%] hover:-translate-y-1 active:translate-y-2"
                            onClick={handleClearAll}
                    >Clear All</button>
                </>)
            }
            {noNotifications &&
                (<>
                    <div className="w-60 h-12 mr-16 cursor-default flex justify-center items-center bg-white border border-neutral-300 shadow-md shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-y-[102%] hover:-translate-y-1">
                        <p className="font-medium">No Notifications</p>
                    </div>
                </>)
            }
        </div>
    )
}

export default NotificationListModal;
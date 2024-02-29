import NotificationListItem from "@/components/NotificationListItem";


const NotificationListModal = ({setModalOpen, notificationList}) => {

    const handleClearAll = () => {

    }
    const notifications = notificationList.length;
    return (
        <div className="flex flex-col items-end justify-start w-fit h-auto max-h-72 absolute z-10 top-16 right-20 m-3">
            {notifications &&
                (<>
                    <ul className="bg-white list-none overflow-hidden hover:overflow-y-scroll border border-neutral-300 flex flex-col justify-start items-start rounded-lg shadow-md shadow-slate-400">
                        {notificationList.map((notification) => (
                            <NotificationListItem key={notification.id} message={notification.message}
                                                  link={notification.link} buttonText={notification.buttonText}
                                                  time={notification.time}/>
                        ))}
                    </ul>
                    <button
                        className="text-black px-2 py-0.5 mt-1 mr-1 border border-neutral-300 shadow-md shadow-slate-400 text-md bg-white rounded-full  transition duration-500 hover:scale-[103%] hover:-translate-y-1 active:translate-y-2"
                        onClick={handleClearAll}
                    >Clear All
                    </button>
                </>)
            }
            {!notifications &&
                (<>
                    <div
                        className="w-60 h-12 mr-16 cursor-default flex justify-center items-center bg-white border border-neutral-300 shadow-md shadow-slate-300 rounded-lg transition ease-in-out duration-500 hover:scale-y-[102%] hover:-translate-y-1">
                        <p className="font-medium">No Notifications</p>
                    </div>
                </>)
            }
        </div>
    )
}

export default NotificationListModal;
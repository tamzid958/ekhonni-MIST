// "use client"
//
// import BuyerBidModal from "@/components/BuyerBidModal";
// import SellerSelectModal from "@/components/SellerSelectModal";
// import {useState} from "react";
// import Header from "@/components/Header";
// import AddAdminModal from "@/components/AddAdminModal";
// import RemoveAdminModal from "@/components/RemoveAdminModal";
// import AdminModal from "@/components/AdminModal";
//
//
//
//
//
// const TestPage = () => {
//     const biddingActive = true;
//     const [modalIsOpen , setModalIsOpen] = useState(true);
//
//     return (
//         <>
//
//          <Header/>
//
//             {/*{modalIsOpen && <AddAdminModal setModalOpen={setModalIsOpen}/>}*/}
//             <AddAdminModal />
//
//         </>
//     )
// }
//
// export default TestPage;



import Header from "@/components/Header";
import AdminModal from "@/components/AdminModal";
import AddAdminModal from "@/components/AddAdminModal";
import AddCategoryModal from "@/components/AddCategoryModal";
import RemoveAdminModal from "@/components/RemoveAdminModal";
import RemoveCategoryModal from "@/components/RemoveCategoryModal";

const test = ()=>{
    return (
        <>
            <Header/>
            <RemoveCategoryModal/>
        </>
    )
}
export default test;
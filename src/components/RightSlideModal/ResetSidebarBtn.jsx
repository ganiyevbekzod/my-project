// // components/ResetSidebarButton.js
// import { useSidebar } from "../../Context/SidebarContext";

// const ResetSidebarButton = () => {
//   const { resetSidebar, isOpen } = useSidebar();

//   // Agar sidebar ochiq bo'lsa, tugma ishlamaydi
//   const handleClick = () => {
//     if (!isOpen) {
//       resetSidebar();
//     }
//   };

//   return (
//     <button 
//       className="reset-sidebar-btn"
//       onClick={handleClick}
//       disabled={isOpen}
//     >
//       {isOpen ? "Sidebar already open" : "Reset Sidebar to Default"}
//     </button>
//   );
// };

// export default ResetSidebarButton;
export default function Searchbar() {
  return (
    <div className="w-[400px] flex justify-center items-center">
      <input
        type="text"
        placeholder="Search for Clients/projects..."
        aria-label="Search"
        className="bg-white w-full h-[60px] px-6 text-sm text-[#0d0b0bbf] border border-gray-300 rounded-4xl focus:outline-none focus:ring-2 focus:ring-green-400 hover:border-gray-400 shadow-sm transition"
      />
    </div>
  );
}
// // src/Components/Searchbar.jsx
// import React from 'react';

// export default function Searchbar() { 
//   return ( 
// <div className="h-[48px] w-[541px] mt-[17px] mr-[10px] mb-[13px] ml-[550px] bg-[white] border-0.5 rounded-[55px]">
// <input 
//         type="text"
//         placeholder="Search for Clients/projects..."
//         className="w-[400px] h-[21px] font-[400] text-left text-[14px] leading-[100px] mt-[12px] text-[#060606 40%] font-poppin border-0 ml-[64px]" />
//     </div>
//   );
// } 

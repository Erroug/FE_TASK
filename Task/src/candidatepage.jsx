import React from "react";
import { Card, CardHeader, CardContent, CardTitle, } from './component/ui/ccard';
import Button from "./component/ui/bbuton";
import  Badge  from './component/ui/badge';
import { Tabs, TabsList, TabsTrigger } from './component/ui/ttabs';
import  Input  from './component/ui/iinput';
import Download from './component/ui/icon/download';
import LinkIcon from "./component/ui/icon/LinkIcon";
import { useNavigate } from 'react-router-dom';

export default function DesignerDashboard() {
   const navigate = useNavigate();
     const handleNavigate = () => {
    navigate('/');
  };
  return (
    // <div className="bg-white min-h-screen p-6 text-black  ">

    //    {/* Navbar */}
    //   <nav className="flex items-center justify-between px-6 py-4 border-b border-black/10">
    //     <div className="flex items-center gap-4 flex-1">
    //       <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded font-bold text-sm">
    //         L
    //       </div>
    //     </div>
    //     <div className="flex-1 flex justify-center">
    //       <Input
    //         placeholder="Search for people or company"
    //         className="w-64 text-sm"
    //       />
    //     </div>
    //     <div className="flex items-center gap-4 flex-1 justify-end">
    //       <Button variant="outline"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //         </Button>
    //       <Button variant="outline"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M21 13.2554C18.2207 14.3805 15.1827 15 12 15C8.8173 15 5.7793 14.3805 3 13.2554M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6M12 12H12.01M5 20H19C20.1046 20 21 19.1046 21 18V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V18C3 19.1046 3.89543 20 5 20Z" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //         </Button>
    //       <Button variant="outline"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    //         <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //         </Button>
    //        <Button variant="outline"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    //         <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    //         </svg>
    //       </Button>
    //       <Button className="bg-green-500 text-white">+ Create a Job</Button>
    //     </div>
    //   </nav>

    //   {/* Header */}
    //   <div className="flex justify-between items-center w-full  mb-4">
    //     <button onClick={handleNavigate} className="text-sm text-black-500 cursor-pointer">Back to Dashboard</button>
    //     {/* <div className="flex items-center gap-2"> */}
    //       <div className="absolute left-1/2 text-sm font-medium text-green-600">4/5 Reveals Left</div>
    //     {/* </div> */}
        

    //   </div>

    //   {/* Job Info */}
    //   <div className="flex gap-4 ">
    //     {/* Left Sidebar */}
    //     <div className="w-[50%] space-y-6">
    //       <Card>
    //         <CardHeader>
    //           <div className="flex justify-between items-center">
    //             <div>
    //               <CardTitle className="text-[11px]">Senior Product Designer</CardTitle>
    //               <div className="text-[11px] text-gray-500">Posted 3 Days Ago • Bengaluru, India</div>
    //             </div>
    //             <div className="flex gap-1 items-center">
    //               <Button variant="outline" className="text-[10px] px-2 py-0.5 h-auto">
    //                 Add Team Member
    //               </Button>
    //               <Button variant="outline" className="text-[10px] px-2 py-0.5 h-auto">
    //                 Edit Job
    //               </Button>
    //             </div>
    //           </div>
    //         </CardHeader>
    //         <CardContent>
    //           <div className="flex gap-1 flex-wrap text-[10px] text-gray-600 mb-2 items-center ">
    //             <Badge variant="secondary">All</Badge>
    //             <Badge variant="outline">Unlocked</Badge>
    //             <Badge variant="outline">Interviewing</Badge>
    //             <Badge variant="outline">Accepted</Badge>
    //             <Badge variant="outline">Rejected</Badge>
    //             <Badge variant="outline">Saved</Badge>
    //           </div>
    //           <Input placeholder="Search Candidate" className="mt-2" />
    //         </CardContent>
    //       </Card>

    //       {/* Side Profile Card */}
    //       <Card>
    //         <CardContent className="pt-4">
    //           <div className="flex items-center gap-4">
    //             <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
    //             <div>
    //               <div className="font-semibold text-sm">profile locked</div>
    //               <div className="text-xs text-gray-500">Bengaluru, India . 8 Years of Exp.</div>
    //               {/* <div className="text-xs text-gray-500">8 Years of Exp.</div> */}
    //             </div>
    //           </div>
    //           <div className="mt-3 text-xs">
    //             <div className="font-semibold">Recent Experience</div>
    //             <div>Lead Designer • Lollypop Designs</div>
    //             <div>Jan 2022 - Present ∙ 2 years 8 months</div>
    //             <div className="font-semibold mt-2">Education</div>
    //             <div>MA, Graphic Design • Kingston University London • 2022</div>
    //           </div>
    //           <div className="flex gap-2 flex-wrap text-xs mt-2">
    //             <Badge>Visual Design</Badge>
    //             <Badge>Prototyping</Badge>
    //             <Badge>Problem Solving</Badge>
    //             <Badge>+3</Badge>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </div>

    //     {/* Main Content */}
    //     <div className="w-[50%]">
    //       <Tabs defaultValue="resume" className="mb-4">
    //         <TabsList>
    //           <TabsTrigger value="resume">Resume</TabsTrigger>
    //           <TabsTrigger value="questions">Screening Questions</TabsTrigger>
    //           <TabsTrigger value="message">Message</TabsTrigger>
    //           <TabsTrigger value="notes">Notes</TabsTrigger>
    //           <TabsTrigger value="schedule">Schedule</TabsTrigger>
    //         </TabsList>
    //       </Tabs>

    //       <Card>
    //         <CardHeader className="flex flex-row justify-between items-center">
    //           <CardTitle className="text-base">Candidate's Resume</CardTitle>
    //           <div className="flex items-center gap-2">
    //             <Button variant="outline" size="icon">
    //               <Download size={16} />
    //             </Button>
    //             <Button variant="outline" size="icon">
    //               <LinkIcon size={16} />
    //             </Button>
    //             <Button variant="destructive" className="text-sm px-3 py-1">
    //               Not a Good Fit
    //             </Button>
    //             <Button className="bg-black text-white text-sm px-3 py-1">Good Fit</Button>
    //           </div>
    //         </CardHeader>

    //         <CardContent>
    //           <div className="flex items-center gap-4 mb-4">
    //             <div className="w-16 h-16 rounded-full bg-gray-300"></div>
    //             <div>
    //               <div className="font-semibold text-lg">Pritesh Srivastava</div>
    //               <div className="text-sm text-gray-500">Bengaluru, India • 8 Years of Exp.</div>
    //             </div>
    //           </div>
    //           <div className="flex gap-2 flex-wrap mb-4">
    //             <Badge>Visual Design</Badge>
    //             <Badge>Prototyping</Badge>
    //             <Badge>Problem Solving</Badge>
    //             <Badge>Information Architecture</Badge>
    //             <Badge>Business Strategy</Badge>
    //             <Badge>Figma</Badge>
    //           </div>

    //           <div className="mb-4">
    //             <h2 className="font-semibold mb-1">Recent Experience</h2>
    //             <div className="mb-3">
    //               <strong>Lead Designer</strong><br />
    //               Lollypop Designs<br />
    //               Jan 2022 - Present • 2 years 8 months • Bengaluru, India<br />
    //               <p className="text-sm text-gray-600">
    //                 Developed a successful, scalable perfect-dark evolving experience in collaboration with product managers, coaches, and athletes. Also, recognized by ExOps India, a regional organization that has been empowering people with disabilities.
    //               </p>
    //             </div>
    //             <div>
    //               <strong>Senior Designer</strong><br />
    //               Santander Bank<br />
    //               Jan 2021 - Mar 2021 • 3 months • London, UK<br />
    //               <p className="text-sm text-gray-600">
    //                 Developed a successful, scalable perfect-dark evolving experience in collaboration with product managers, coaches, and athletes.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="mb-4">
    //             <h2 className="font-semibold mb-1">Education</h2>
    //             <div>
    //               <strong>MA, Graphic Design</strong><br />
    //               Kingston University<br />
    //               Jan 2021 - Sep 2023 • London, UK<br />
    //               <p className="text-sm text-gray-600">
    //                 Developed a successful, scalable perfect-dark evolving experience in collaboration with product managers, coaches, and athletes.
    //               </p>
    //             </div>
    //           </div>

    //           <div className="mb-4">
    //             <h2 className="font-semibold mb-1">Achievements</h2>
    //             <div>
    //               <strong>Course Leader</strong><br />
    //               Kingston University<br />
    //               Jan 2022 - Sep 2023 • London, UK<br />
    //               <p className="text-sm text-gray-600">
    //                 Developed a successful, scalable perfect-dark evolving experience in collaboration with product managers, coaches, and athletes.
    //               </p>
    //             </div>
    //           </div>

    //           <div>
    //             <h2 className="font-semibold mb-1">Languages Known</h2>
    //             <div className="flex gap-2 flex-wrap">
    //               <Badge>Hindi</Badge>
    //               <Badge>Telugu</Badge>
    //               <Badge>English</Badge>
    //               <Badge>German</Badge>
    //             </div>
    //           </div>
    //         </CardContent>
    //       </Card>
    //     </div>
    //   </div>
    // </div>

      <>
<nav className="bg-white border-b px-6 py-3 flex items-center justify-between shadow-sm">
      {/* Left - Logo & Search */}
<div className="flex items-center gap-4">
<img src="/logo.svg" alt="Logo" className="h-6 w-6 object-contain" />
<div className="absolute left-1/2 w-100">
<input
  type="text"
  placeholder="Search for people or company"
  className="w-full pl-4 pr-10 py-2 border border-[#E8E8E8] bg-[#E8E8E8] rounded-full text-sm placeholder:text-[#2D4232] focus:outline-none focus:ring-1 focus:ring-gray-300"
/>

<div className="absolute right-3 top-2.5 text-gray-400">
<svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
>
<path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
              />
</svg>
</div>
</div>
</div>
 
      {/* Right - Icons + CTA */}
<div className="flex items-center gap-6">
<div className="flex items-center gap-5 text-gray-700">
          {/* Home Icon */}
<svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5  text-[#2D4232]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
>
<path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 9.75L12 3l9 6.75V21a.75.75 0 01-.75.75H3.75A.75.75 0 013 21V9.75z"
            />
</svg>
 
          {/* Briefcase Icon */}
<svg width="17" height="17" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19 12.2554C16.2207 13.3805 13.1827 14 10 14C6.8173 14 3.7793 13.3805 1 12.2554M14 5V3C14 1.89543 13.1046 1 12 1H8C6.89543 1 6 1.89543 6 3V5M10 11H10.01M3 19H17C18.1046 19 19 18.1046 19 17V7C19 5.89543 18.1046 5 17 5H3C1.89543 5 1 5.89543 1 7V17C1 18.1046 1.89543 19 3 19Z" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

 
          {/* User Icon */}
<svg width="17" height="17" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5C12 7.20914 10.2091 9 8 9C5.79086 9 4 7.20914 4 5C4 2.79086 5.79086 1 8 1C10.2091 1 12 2.79086 12 5Z" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M8 12C4.13401 12 1 15.134 1 19H15C15 15.134 11.866 12 8 12Z" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

 
          {/* Bell Icon */}
<svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5  text-[#2D4232]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
>
<path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6 6 0 10-12 0v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
</svg>
</div>
 
        {/* Create Job Button */}
<button className="bg-[#B6E777] text-sm font-semibold text-[#2D4232] px-4 py-2 rounded-full hover:bg-lime-500">
          + Create a Job
</button>
</div>
</nav>
    
    <div className="min-h-screen bg-white p-4 font-sans">
     
 
   
 
    
 
      {/* Candidates List */}
<div className="flex gap-4">
        {/* Left - Candidates Preview */}
        <div className="w-1/2 p-4 rounded-sm shadow space-y-4">
         {/* Header */}
<div className="flex justify-between items-center mb-4">
<div
  className="flex items-center gap-2 text-sm font-medium text-[#212121] cursor-pointer w-fit"
  onClick={handleNavigate}
>
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.08333 0.75L1.125 6M1.125 6L6.08333 11.25M1.125 6L13.875 6"
      stroke="#212121"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
  Back to Dashboard
</div>

<div className="flex items-center font-semibold text-sm text-[#212121]">
  <svg
    width="18"
    height="18"
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="mr-2"
  >
    <path
      d="M5 9V5C5 2.79086 6.79086 1 9 1C11.2091 1 13 2.79086 13 5M9 13V15M3 19H15C16.1046 19 17 18.1046 17 17V11C17 9.89543 16.1046 9 15 9H3C1.89543 9 1 9.89543 1 11V17C1 18.1046 1.89543 19 3 19Z"
      stroke="#649427"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
  4/5 Reveals Left
</div>

</div>

{/* Job Info */}
<div className="bg-white p-4 rounded-lg shadow mb-4">
  <div className="text-lg font-semibold">Senior Product Designer</div>

  <div className="flex justify-between items-center text-sm text-[#1E1E1E] mt-1">
    <div>Posted 3 days ago · Bengaluru, India</div>
    <div className="flex gap-2">
      <Button className="text-sm">Add team member</Button>
      <Button className="text-sm" variant="outline">Edit Job</Button>
    </div>
  </div>
</div>


          {/* Candidate Filter Tabs */}
<div className="flex items-center gap-2 mb-2">
  {["All", "Unlocked", "Interviewing", "Accepted", "Rejected", "Saved"].map((tab) => (
    <Button
      key={tab}
      variant="ghost"
      className={`text-xs px-3 py-1 rounded-full ${
        tab === "All" ? "bg-[#B6E777] text-black" : "bg-[#F8F8F8]"
      }`}
    >
      {tab}
    </Button>
  ))}
</div>


<div className="flex justify-between">
<div>
  <input
  type="text"
  placeholder="Search candidate"
  className="w-full pl-4 pr-10 py-2 border border-[#E8E8E8] bg-[#E8E8E8] rounded-full text-sm placeholder:text-[#2D4232] focus:outline-none focus:ring-1 focus:ring-gray-300"
/>

</div>

        <div>
<select className="border rounded px-2 py-1 text-sm text-[#2D4232]">
<option>Sort by  </option>
</select>
</div>
</div>



        <div className="text-[#585858] text-xs pl-18 ">Today</div>
 <div

  className="w-full max-w-140 mx-auto rounded-xl shadow-md overflow-hidden p-1 text-black"
  style={{ backgroundColor: 'rgba(212, 211, 211, 0.29)' }}
>
  <div className="flex items-center space-x-4">
    <img
      className="h-16 w-16 rounded-full object-cover"
      src="file:///C:/Users/Vidyadhar%20Chaudhary/Desktop/cms/CMS_FrontendRepo/src/assets/image.svg"
      alt="Profile"
    />
    <div>
      <p className="font-semibold text-xs text-[#585858] flex items-center gap-1">
        <svg width="15" height="15" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 13V15M3.5 19H15.5C16.6046 19 17.5 18.1046 17.5 17V11C17.5 9.89543 16.6046 9 15.5 9H3.5C2.39543 9 1.5 9.89543 1.5 11V17C1.5 18.1046 2.39543 19 3.5 19ZM13.5 9V5C13.5 2.79086 11.7091 1 9.5 1C7.29086 1 5.5 2.79086 5.5 5V9H13.5Z" stroke="#585858" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Profile Locked
      </p>
      <p className="text-gray-600">Bengaluru, India · 8 Years of Exp.</p>
    </div>
  </div>

  <div className="mt-4">
    <p className="text-sm text-gray-500">Recent Experience</p>
    <p className="font-medium">Lead Designer · Lollypop Designs</p>
    <p className="text-gray-600 text-sm">Jan 2022 – Present · 2 years 8 months</p>
  </div>

  <div className="mt-4">
    <p className="text-sm text-gray-500">Educations</p>
    <p className="font-medium">MA, Graphic Design · Kingston University London · 2022</p>
  </div>

  <div className="mt-4 flex flex-wrap gap-2 text-sm">
    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">✓ Visual Design</span>
    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Prototyping</span>
    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Problem Solving</span>
    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">+3</span>
  </div>

  <div className="flex justify-between">
    <div className="mt-4 text-sm text-[#1E1E1E]">Applied 2 Days Ago</div>

    <div className="mt-4">
      <button className="flex items-center gap-2 border px-4 py-1 rounded bg-gray-100 text-[#585858] hover:bg-gray-200">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-5 h-5"
        >
          <path
            d="M12 19H5L5.007 12H7V17H12V19ZM18.992 12H17V7H12V5H19L18.992 12Z"
            fill="#585858"
          />
        </svg>
        View Application
      </button>
    </div>
  </div>
</div>

    
<div
  className="w-full max-w-140 mx-auto rounded-xl shadow-md overflow-hidden p-1 text-black"
  style={{ backgroundColor: 'rgba(212, 211, 211, 0.29)' }}
>
  <div className="flex items-center space-x-4">
    <img
      className="h-16 w-16 rounded-full object-cover"
      src="file:///C:/Users/Vidyadhar%20Chaudhary/Desktop/cms/CMS_FrontendRepo/src/assets/image.svg"
      alt="Profile"
    />
    <div>
      <p className="font-semibold text-xs text-[#585858] flex items-center gap-1">
        <svg width="15" height="15" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.5 13V15M3.5 19H15.5C16.6046 19 17.5 18.1046 17.5 17V11C17.5 9.89543 16.6046 9 15.5 9H3.5C2.39543 9 1.5 9.89543 1.5 11V17C1.5 18.1046 2.39543 19 3.5 19ZM13.5 9V5C13.5 2.79086 11.7091 1 9.5 1C7.29086 1 5.5 2.79086 5.5 5V9H13.5Z" stroke="#585858" strokeWidth="2" strokeLinecap="round"/>
        </svg>
        Profile Locked
      </p>
      <p className="text-gray-600">Bengaluru, India · 8 Years of Exp.</p>
    </div>
  </div>

  <div className="mt-4">
    <p className="text-sm text-gray-500">Recent Experience</p>
    <p className="font-medium">Lead Designer · Lollypop Designs</p>
    <p className="text-gray-600 text-sm">Jan 2022 – Present · 2 years 8 months</p>
  </div>

  <div className="mt-4">
    <p className="text-sm text-gray-500">Educations</p>
    <p className="font-medium">MA, Graphic Design · Kingston University London · 2022</p>
  </div>

  <div className="mt-4 flex flex-wrap gap-2 text-sm">
    <span className="bg-green-100 text-green-800 px-2 py-1 rounded">✓ Visual Design</span>
    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Prototyping</span>
    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">Problem Solving</span>
    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded">+3</span>
  </div>

  <div className="flex justify-between">
    <div className="mt-4 text-sm text-[#1E1E1E]">Applied 2 Days Ago</div>

    <div className="mt-4">
      <button className="flex items-center gap-2 border px-4 py-1 rounded bg-gray-100 text-[#585858] hover:bg-gray-200">
        <svg width="15" height="15" viewBox="0 0 22 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11.75V6.75C6 3.98858 8.23858 1.75 11 1.75C13.7614 1.75 16 3.98858 16 6.75M11 16.75V19.25M3.5 24.25H18.5C19.8807 24.25 21 23.1307 21 21.75V14.25C21 12.8693 19.8807 11.75 18.5 11.75H3.5C2.11929 11.75 1 12.8693 1 14.25V21.75C1 23.1307 2.11929 24.25 3.5 24.25Z" stroke="#585858" stroke-width="2" stroke-linecap="round"/>
</svg>

        Reveal
      </button>

      </div>
      </div>
    </div>
    </div>
 
        {/* Right - Candidate Detail View */}
<div className="w-1/2 p-4 rounded-sm shadow space-y-4">
<div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Tabs */}
      <div className="flex gap-4 border-b px-6 py-3 text-sm font-medium bg-gray-50">
        {["Resume", "Screening Questions", "Message", "Notes", "Schedule"].map((tab, idx) => (
          <button
            key={tab}
            className={`pb-2 ${idx === 0 ? "border-b-2 border-[#2D4232] text-[#2D4232]" : "text-gray-500"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Resume Card */}
      <div className="">
        <div className="p-6 relative">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-4">
            <div>
              <p className="text-sm font-semibold">Candidate’s Resume</p>
              <p className="text-xs text-gray-500">Last Updated May 2024</p>
            </div>
            <div className="flex items-center gap-2">
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 13L1 14C1 15.6569 2.34315 17 4 17L14 17C15.6569 17 17 15.6569 17 14L17 13M13 9L9 13M9 13L5 9M9 13L9 1" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

<svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M11.8284 8.17157C10.2663 6.60948 7.73367 6.60948 6.17157 8.17157L2.17157 12.1716C0.609476 13.7337 0.609476 16.2663 2.17157 17.8284C3.73367 19.3905 6.26633 19.3905 7.82843 17.8284L8.92999 16.7269M8.17157 11.8284C9.73367 13.3905 12.2663 13.3905 13.8284 11.8284L17.8284 7.82843C19.3905 6.26633 19.3905 3.73367 17.8284 2.17157C16.2663 0.609476 13.7337 0.609476 12.1716 2.17157L11.072 3.27118" stroke="#212121" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

              <button className="font-bold text-xs bg-[#FFCDCD33] border border-[#E8E8E8] text-[#980000] px-4 py-1.5 rounded-md">
  Not a Good Fit
</button>
              <button className="font-bold text-xs bg-[#212121]  text-[#F5F5F5] px-4 py-1.5 rounded-md">
  Good Fit
</button>
<svg width="32" height="28" viewBox="0 0 56 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="56" height="50" rx="4" fill="#B6E777" fill-opacity="0.25"/>
  <path d="M21 18C21 16.8954 21.8954 16 23 16H33C34.1046 16 35 16.8954 35 18V34L28 30.5L21 34V18Z" stroke="#649427" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
              
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex justify-between items-start mb-6 relative">
            {/* Vertical line from photo to bottom */}
            <div className="absolute left-5 top-10 bottom-6 w-px bg-gray-300"></div>
            <div className="flex items-center gap-4">
              <img src="https://via.placeholder.com/40" className="rounded-full w-10 h-10" alt="avatar" />
              <div>
                <p className="font-semibold text-[#2D4232] text-extra bold ">Pritesh Srivastava <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="inline ml-1 align-middle">
  <path d="M10.8956 0.603577C11.2295 0.270091 11.7705 0.270092 12.1044 0.603577C12.3899 0.888645 12.8358 0.935505 13.1743 0.71602C13.5703 0.459257 14.0994 0.571727 14.3567 0.96736C14.5767 1.30555 15.003 1.44408 15.3798 1.29977C15.8205 1.13095 16.3147 1.35098 16.4842 1.79147C16.629 2.16801 17.0172 2.39215 17.4158 2.32933C17.882 2.25583 18.3196 2.5738 18.3938 3.03989C18.4572 3.43831 18.7903 3.73828 19.1932 3.75968C19.6645 3.78472 20.0264 4.18673 20.0021 4.65806C19.9812 5.06095 20.2447 5.42363 20.6344 5.52833C21.0901 5.6508 21.3606 6.11929 21.2388 6.57525C21.1347 6.96501 21.317 7.37455 21.6763 7.55796C22.0967 7.77253 22.2639 8.28701 22.0499 8.70768C21.867 9.06727 21.9602 9.50577 22.2736 9.75988C22.6401 10.0572 22.6967 10.5952 22.3999 10.9621C22.1462 11.2759 22.1462 11.7241 22.3999 12.0379C22.6967 12.4048 22.6401 12.9428 22.2736 13.2401C21.9602 13.4942 21.867 13.9327 22.0499 14.2923C22.2639 14.713 22.0967 15.2275 21.6763 15.442C21.317 15.6254 21.1347 16.035 21.2388 16.4248C21.3606 16.8807 21.0901 17.3492 20.6344 17.4717C20.2447 17.5764 19.9812 17.939 20.0021 18.3419C20.0264 18.8133 19.6645 19.2153 19.1932 19.2403C18.7903 19.2617 18.4572 19.5617 18.3938 19.9601C18.3196 20.4262 17.882 20.7442 17.4158 20.6707C17.0172 20.6078 16.629 20.832 16.4842 21.2085C16.3147 21.649 15.8205 21.869 15.3798 21.7002C15.003 21.5559 14.5767 21.6944 14.3567 22.0326C14.0994 22.4283 13.5703 22.5407 13.1743 22.284C12.8358 22.0645 12.3899 22.1114 12.1044 22.3964C11.7705 22.7299 11.2295 22.7299 10.8956 22.3964C10.6101 22.1114 10.1642 22.0645 9.82574 22.284C9.42974 22.5407 8.9006 22.4283 8.64327 22.0326C8.42331 21.6944 7.99695 21.5559 7.62021 21.7002C7.17948 21.869 6.68529 21.649 6.51584 21.2085C6.371 20.832 5.98276 20.6078 5.58425 20.6707C5.11805 20.7442 4.6804 20.4262 4.60624 19.9601C4.54285 19.5617 4.2097 19.2617 3.80683 19.2403C3.33554 19.2153 2.97357 18.8133 2.99793 18.3419C3.01876 17.939 2.75525 17.5764 2.36564 17.4717C1.90985 17.3492 1.63937 16.8807 1.7612 16.4248C1.86534 16.035 1.683 15.6254 1.32367 15.442C0.903304 15.2275 0.73614 14.713 0.950104 14.2923C1.133 13.9327 1.0398 13.4942 0.72645 13.2401C0.359883 12.9428 0.303337 12.4048 0.600088 12.0379C0.853753 11.7241 0.853753 11.2759 0.600088 10.9621C0.303337 10.5952 0.359883 10.0572 0.72645 9.75988C1.0398 9.50577 1.133 9.06727 0.950104 8.70768C0.73614 8.28701 0.903304 7.77253 1.32367 7.55796C1.683 7.37455 1.86534 6.96501 1.7612 6.57525C1.63937 6.11929 1.90985 5.65081 2.36564 5.52833C2.75525 5.42363 3.01876 5.06095 2.99793 4.65806C2.97357 4.18673 3.33554 3.78472 3.80683 3.75968C4.2097 3.73828 4.54285 3.43831 4.60624 3.03989C4.6804 2.5738 5.11805 2.25583 5.58425 2.32933C5.98276 2.39215 6.371 2.16801 6.51584 1.79147C6.68529 1.35098 7.17948 1.13095 7.62021 1.29977C7.99695 1.44408 8.42331 1.30555 8.64327 0.96736C8.9006 0.571727 9.42974 0.459257 9.82574 0.71602C10.1642 0.935505 10.6101 0.888645 10.8956 0.603577Z" fill="url(#paint0_linear_1_3607)"/>
  <path d="M7.91675 12.0833L10.2501 14.4167L16.0834 8.58334" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <defs>
    <linearGradient id="paint0_linear_1_3607" x1="11.5" y1="4.87879" x2="11.5" y2="23" gradientUnits="userSpaceOnUse">
      <stop stop-color="#FBBC05"/>
      <stop offset="1" stop-color="#957003"/>
    </linearGradient>
  </defs>
</svg></p>
                <p className="text-m text-gray-500">Bengaluru, India • 8 Years of Exp.</p>
              </div>
            </div>
            <p className="flex gap-2 text-xs text-[#585858]  cursor-pointer"> <svg width="13" height="13" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 5V1M14 5V1M5 9H15M3 19H17C18.1046 19 19 18.1046 19 17V5C19 3.89543 18.1046 3 17 3H3C1.89543 3 1 3.89543 1 5V17C1 18.1046 1.89543 19 3 19Z" stroke="#585858" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
 Send Calendar Invite</p>
          </div>

          {/* Resume Tree with Bullet Points */}
          <div className="relative pl-10">
            {/* Skills Section with Bullet */}
            <div className="mb-6 relative">
              <div className="absolute left-0 top-2 w-2 h-2 bg-gray-600 rounded-full"></div>
              <p className="text-sm text-[#919191] font-medium mb-1 ml-6">Skills</p>
              <div className="ml-6 flex flex-wrap gap-2">
                {["Visual Design", "Prototyping", "Problem Solving", "Information Architecture", "Business Strategy", "Figma"].map(skill => (
                  <span key={skill} className="bg-[#EEEEEE] text-[#585858] text-s px-2 py-0.5 ">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Other Sections */}
            {["Recent Experience", "Education", "Achievements", "Languages Known"].map((section, i) => (
              <div key={section} className="mb-6 relative">
                <div className="absolute left-0 top-2 w-2 h-2 bg-gray-600 rounded-full"></div>
                <p className="text-[#919191] text-sm font-medium mb-1 ml-6">{section}</p>
                <div className="ml-6">
                  {section === "Recent Experience" && (
                    <div>
                      <div className="mb-2">
                        <p className="font-semibold text-sm">Lead Designer Lollypop Designs</p>
                        <p className="text-xs text-gray-500">Jan 2022 – Present · 2 years 8 months</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Developed a successful, scalable, palette-less shooting experience...
                        </p>
                      </div>
                      <div>
                        <p className="font-semibold text-sm">Intern Designer Santander Bank</p>
                        <p className="text-xs text-gray-500">Jan 2021 – Mar 2021 · 3 months</p>
                        <p className="text-sm text-gray-600 mt-1">
                          Developed a successful, scalable, palette-less shooting experience...
                        </p>
                      </div>
                      <button className="text-s mt-2  py-1 rounded bg-[#B6E77740] text-green-700">
                        + 3 More
                      </button>
                    </div>
                  )}
                  {section === "Education" && (
                    <div>
                      <p className="font-semibold text-sm">MA, Graphic Design Kingston University</p>
                      <p className="text-xs text-gray-500">Jan 2022 – Sep 2023 • London, UK</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Developed a successful, scalable palette-less shooting experience...
                      </p>
                    </div>
                  )}
                  {section === "Achievements" && (
                    <div>
                      <p className="font-semibold text-sm">Course Leader Kingston University</p>
                      <p className="text-xs text-gray-500">Jan 2022 – Sep 2023 • London, UK</p>
                      <p className="text-sm text-gray-600 mt-1">
                        Developed a successful, scalable palette-less shooting experience...
                      </p>
                    </div>
                  )}
                  {section === "Languages Known" && (
                    <div className="flex gap-2 flex-wrap">
                      {["Hindi", "Telugu", "English", "German"].map(lang => (
                        <span key={lang} className="bg-[#EEEEEE] text-[#585858] text-s px-3 py-1 rounded">
                          {lang}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

</div>
</div>
</div>
</>
  );
}

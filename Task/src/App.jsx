import React from 'react';
import { Card, CardContent } from './component/ui/card'
import { Button } from './component/ui/button';
import { Input } from './component/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from './component/ui/avatar';
import { Tabs, TabsList, TabsTrigger } from './component/ui/tab';
import { useNavigate } from 'react-router-dom';

export default function JobDashboard() {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/candidate');
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b border-black/10">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded font-bold text-sm">
            L
          </div>
        </div>
        <div className="flex-1 flex justify-center">
         <input
  type="text"
  placeholder="Search for people or company"
  className="w-full pl-4 pr-10 py-2 border border-[#E8E8E8] bg-[#E8E8E8] rounded-full text-sm placeholder:text-[#2D4232] focus:outline-none focus:ring-1 focus:ring-gray-300"
/>
        </div>
        <div className="flex items-center gap-4 flex-1 justify-end">
          <Button variant="outline"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 10L3 8M3 8L10 1L17 8M3 8V18C3 18.5523 3.44772 19 4 19H7M17 8L19 10M17 8V18C17 18.5523 16.5523 19 16 19H13M7 19C7.55228 19 8 18.5523 8 18V14C8 13.4477 8.44772 13 9 13H11C11.5523 13 12 13.4477 12 14V18C12 18.5523 12.4477 19 13 19M7 19H13" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </Button>
          <Button variant="outline"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M21 13.2554C18.2207 14.3805 15.1827 15 12 15C8.8173 15 5.7793 14.3805 3 13.2554M16 6V4C16 2.89543 15.1046 2 14 2H10C8.89543 2 8 2.89543 8 4V6M12 12H12.01M5 20H19C20.1046 20 21 19.1046 21 18V8C21 6.89543 20.1046 6 19 6H5C3.89543 6 3 6.89543 3 8V18C3 19.1046 3.89543 20 5 20Z" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </Button>
          <Button variant="outline"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12 14C8.13401 14 5 17.134 5 21H19C19 17.134 15.866 14 12 14Z" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            </Button>
           <Button variant="outline"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 17H20L18.5951 15.5951C18.2141 15.2141 18 14.6973 18 14.1585V11C18 8.38757 16.3304 6.16509 14 5.34142V5C14 3.89543 13.1046 3 12 3C10.8954 3 10 3.89543 10 5V5.34142C7.66962 6.16509 6 8.38757 6 11V14.1585C6 14.6973 5.78595 15.2141 5.40493 15.5951L4 17H9M15 17V18C15 19.6569 13.6569 21 12 21C10.3431 21 9 19.6569 9 18V17M15 17H9" stroke="#2D4232" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </Button>
          <Button className="bg-green-500 text-white">+ Create a Job</Button>
        </div>
      </nav>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 border-r border-black/10 p-4">
          <div className="flex flex-col items-center gap-2">
            <div className="w-[91px] h-[91px] bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs text-gray-600">91×91</span>
            </div>
            <h2 className="font-bold text-lg">Acme Corp Ltd</h2>
            <p className="text-sm text-gray-600">@acmecorp · Bengaluru, India</p>
            <p className="text-sm text-gray-600">Keep it Real.</p>
            <div className="flex justify-between w-full mt-2 font-bold text-sm text-[#2D4232]">
              <div>200<br />Posts</div>
              <div>380<br />Followers</div>
              <div>1003<br />Following</div>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        
        <main className="flex-1 p-6">
          <div className="relative bg-black text-white py-10 px-6 rounded-md mb-6">
  {/* Top-right buttons */}
  <div className="absolute top-4 right-4 flex gap-2">
    <button className="bg-white text-black rounded-full px-3 py-1 border border-gray-300 shadow-sm text-xl hover:bg-white focus:bg-white active:bg-white">
      ⋯
    </button>
    <button className="bg-white text-black rounded-full px-4 py-1 border border-gray-300 shadow-sm text-sm hover:bg-white focus:bg-white active:bg-white">
      Edit Profile
    </button>
  </div>

  {/* Quote aligned slightly to the left */}
  <div className="flex justify-center items-center h-full mt-10 ml-4">
    <p className="italic text-left">
      “Simplicity is the <br />
      <span className="font-semibold pl-10">ultimate sophistication.</span>” <br /><span className="pl-25">-Leonardo da Vinci</span> 
    </p>
  </div>
</div>


          {/* Button Group Section */}
          <div className="flex flex-wrap gap-2 mb-6">
           {[
           "Dashboard",
           "Jobs",
           "Messages",
           "Activity",
           "Schedule",
           "Manage API",
           "Coming Soon"
    ].map((label, idx) =>
     label === "Coming Soon" ? (
           <Button
          key={idx}
            className="bg-yellow-100 text-yellow-800 text-xs px-4 py-1 rounded"
            variant="ghost"
           >
          {label}
            </Button>
              ) : (
    <Button
      key={idx}
      className="text-xs px-4 py-1 rounded"
      variant="ghost"
    >
      {label}
    </Button>
  )
)}

          </div>

          {/* Tabs and Search */}
        <div className="flex justify-between items-center mb-4">
  <Tabs defaultValue="open">
    <TabsList>
      <TabsTrigger value="open">Open</TabsTrigger>
      <TabsTrigger value="closed">Closed</TabsTrigger>
      <TabsTrigger value="draft">Draft</TabsTrigger>
    </TabsList>
  </Tabs>
  <Input placeholder="Search Jobs" className="max-w-sm ml-4" />
</div>

          {/* Jobs List */}
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4 flex justify-between items-center bg-red" >
                <div onClick={handleNavigate}>
                  <p className="font-semibold cursor-pointer bg-white hover:text-red-500" >Senior Product Designer</p>
                  <p className="text-sm text-gray-600">Posted 3 Days Ago · Bengaluru, India</p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">3 New Applications</span>
                  <span className="bg-green-50 text-green-700 px-3 py-1 rounded text-xs border border-green-200">Active Until: Jan 31, 2026</span>
                  <Button variant="outline">Active</Button>
                </div>
              </CardContent>
            </Card>

            {["UI/UX Design Intern", "Senior Full Stack Developer"].map((title, idx) => (
              <Card key={idx}>
                <CardContent className="p-4 flex justify-between items-centerg-white hover:text-red-500">
                  <div>
                    <p className="font-semibold">{title}</p>
                    <p className="text-sm text-gray-600">Posted {idx === 0 ? "8 Days Ago" : "19 Days Ago"} · Delhi, India</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="bg-green-100 text-green-800 px-3 py-1 rounded text-sm">72 New Applications</span>
                    <Button variant="outline">Active</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="w-72 border-l border-black/10 p-4 space-y-4">
          <Card>
            <CardContent className="p-4">
              <p className="text-sm">5/5 Reveals Left</p>
              <p className="text-xs text-gray-500">Unlock 50 Resumes at ₹399</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-4">
              <h3 className="font-semibold mb-2">Scheduled Interviews</h3>
              <div className="space-y-2 text-sm">
                <div>
                  <Avatar className="inline-block mr-2 w-6 h-6">
                    <AvatarFallback>ps</AvatarFallback>
                  </Avatar>
                  Pritesh Srivastava 
                  <p className="pl-10">24 May 2024 · 3:30 PM</p> 
                </div>
                <div>
                  <Avatar className="inline-block mr-2 w-6 h-6">
                    <AvatarFallback>nm</AvatarFallback>
                  </Avatar>
                  Nikita Mansingha 
                  <p className="pl-10">24 May 2024 · 3:30 PM</p> 
                </div>
              </div>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}
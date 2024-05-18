import Image from "next/image";

export default function Home() {
  return (
    <>
    <div className='min-h-[150vh] '>
      
      
      
    {/* Hero Section */}
      <div className="text-white flex flex-col justify-center items-center h-[56vh] gap-4">
        <div className="text-5xl font-bold flex">Black Bag Campaigns <span><img src="https://cdn.pixabay.com/animation/2022/11/13/07/16/07-16-41-158_512.gif" width={70}/></span></div>
        <p className="text-center">
        Creating positive change through crowdfunding, one campaign at a time.<br/>Join the movement to create positive change, one black bag campaign at a time.
        </p>
        <div className="flex justify-center gap-4">
        
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-purple-600/60 transition-shadow duration-300">Start here</button>
        <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md shadow-md shadow-purple-500/50 hover:shadow-lg hover:shadow-purple-600/60 transition-shadow duration-300">Read More</button>
        </div>
      </div>
      <div className="bg-white h-2 opacity-5"></div>
      

      {/* middle section */}
      <div className="text-white container mx-auto">
      <h1 className="font-bold flex justify-center p-7 text-4xl">Your Supporters Can Donate And Help You</h1>
        <div className="flex gap-5 justify-around text-gray-300">
              <div className="item space-y-3">
                <img src="https://cdn-icons-png.flaticon.com/512/8596/8596934.png" width={100} className="rounded-full p-2" />
                <p>Welcome to Black Bag Campaings,<br/>where people come together to support the causes<br/> they care about.</p>
              </div>
              <div className="item space-y-3">
                <img src="https://cdn-icons-png.freepik.com/512/3430/3430447.png" width={100} className="rounded-full p-2" />
                <p>Our platform makes it easy for anyone to <br/> create and share a crowdfunding campaign,<br/> and to connect with a community of people <br/>who are passionate about making a difference. </p>
              </div>
              <div className="item space-y-3">
                <img src="https://www.svgrepo.com/show/194220/donation.svg" width={100} className="rounded-full p-2" />
                <p>To get started, simply create a campaign and<br/> tell us about the cause you're supporting. <br/>Then, share your campaign with your network<br/> and beyond and watch as the donations start rolling in.</p>
              </div>
         </div>
      </div>
      <div className="bg-white h-2 opacity-5 mt-9"></div>
      <div className="text-white container mx-auto m-5">
      <h2 className="font-bold flex justify-center p-7 text-4xl">Learn More About Us</h2>
        <div className="flex gap-5 justify-around text-gray-300">
              <div className="item space-y-3 flex justify-center items-center">
              <iframe className="rounded-lg" width="560" height="315" src="https://www.youtube.com/embed/QMnEP2DYfmI?si=NkWnaF8MIz30ofpZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>
              <div className="item space-y-3 flex justify-center items-center">
                <img src="favicon.ico" width={100} className="rounded-full p-2 mr-7" />
                <p>Our platform makes it easy for anyone to <br/> create and share a crowdfunding campaign,<br/> and to connect with a community of people <br/>who are passionate about making a difference. </p>
              </div>
         </div>
      </div>


    </div>


    </>
  );
}

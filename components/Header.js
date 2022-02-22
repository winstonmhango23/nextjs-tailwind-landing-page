import Image from "next/image"

export default function Header(){
    return(
        <>
        <div className="py-20 md:py-24">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap xl:items-center -mx-4">
            <div className="w-full md:w-1/2 px-4 mb-16 md:mb-0">
              
              <h1 className="mb-6 text-3xl md:text-5xl lg:text-6xl leading-tight font-bold tracking-tight underline decoration-wavy decoration-6 decoration-green-600 " data-config-id="auto-txt-14-1">Sell Your Assets.</h1>
              <p className="mb-8 text-lg md:text-xl text-coolGray-500 font-medium" >We will sell your valuable asset at the value it deserves. Simply submit and relax, we will handle the marketing.</p>
              <div className="flex flex-wrap">
                <div className="w-full md:w-auto py-1 md:py-0 md:mr-4">
                  <a className="inline-block py-3 px-4 w-full text-base md:text-lg leading-4 text-green-50 font-medium text-center bg-black hover:bg-green-600 focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 border border-green-500 rounded-md shadow-sm" href="#" >Request a Demo</a></div>
                <div className="w-full md:w-auto py-1 md:py-0">
                   <a className="inline-block py-3 px-4 w-full text-base md:text-lg leading-4 text-coolGray-800 font-medium text-center bg-white hover:bg-coolGray-100 focus:ring-2 focus:ring-coolGray-200 focus:ring-opacity-50 border border-coolGray-200 rounded-md shadow-sm" href="#" data-config-id="auto-txt-17-1">Sign Up for Free</a></div>
              </div>
            </div>
            <div className="w-full md:w-1/2 px-4">
              <div className="relative mx-auto md:mr-0 max-w-max">
                
                <Image className="relative rounded-7xl" src="/assets/Scene 2.png" alt="" height='600' width='700'/>
              </div>
            </div>
          </div>
        </div>
      </div>
        </>
    )
}
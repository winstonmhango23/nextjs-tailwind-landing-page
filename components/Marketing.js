import Image from 'next/image'

export default function Marketing() {
    return(
        <>
        <section data-section-id="7" data-category="testimonials-white-pattern" data-component-id="22eb0260_01_awz" className="py-24 md:pb-28 bg-white" >
        <div className="container px-4 mx-auto">
          <div className="relative max-w-5xl sm:px-6 pb-6 mb-10 mx-auto text-center">
            <Image className="absolute top-0 left-0" src="/assets/Scene 2.png" alt="" height='200' width= '300' />
            <Image className="absolute bottom-0 right-0" src="/assets/Scene 1.png" alt="" height='200' width= '300' />
            <div className="relative">
              <span className="inline-block py-px px-2 mb-4 text-xs leading-5 text-green-500 bg-green-100 font-medium uppercase rounded-9xl" >Sellit with uswithin hours!</span>
              <h2 className="text-2xl md:text-5xl font-semibold tracking-tighter underline decoration-wavy decoration-4 decoration-green-600 ">Our sales team is<span className="text-green-500">good at their job</span> !.</h2>
            </div>
          </div>
          <div className="text-center mb-8">
            <Image className="mx-auto mb-6 rounded-full" src="/assets/avatar.jpg" alt="" height='60' width= '60' />
            <h3 className="mb-2 text-xl md:text-2xl font-semibold" >Dorothy Kassam</h3>
            <span className="text-lg text-gray-400 font-medium">Marketing Executive &amp; Founder </span>
          </div>
          <div className="text-center">
            <button className="inline-block h-3 w-3 mr-3 rounded-full bg-coolGray-100"></button>
            <button className="inline-block h-3 w-3 mr-3 rounded-full bg-green-500"></button>
            <button className="inline-block h-3 w-3 rounded-full bg-coolGray-100"></button>
          </div>
        </div>
      </section>

        </>
    )
}
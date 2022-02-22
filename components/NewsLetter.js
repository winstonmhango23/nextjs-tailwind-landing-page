export default function Newsletter () {
    return (
        <>
        <section className="font-medium bg-white py-24 2xl:py-44">
        <div className="container px-4 mx-auto">
          <span className="uppercase tracking-widest text-xs leading-4 mb-9 block text-center text-gray-300">Newsletter</span>
          <h2 className="text-8xl md:text-8xl xl:text-8xl leading-tight mb-14 xl:mb-16 text-center">Stay updated</h2>
          <h3 className="font-heading text-xl xl:text-2xl text-center leading-10 mb-20 max-w-lg mx-auto">Get weekly News and marketing trends.</h3>
          <div className="md:flex md:items-center md:justify-center">
            <p className="md:mr-9 font-normal text-lg text-darkBlueGray-400 mb-3 md:mb-0">Drop your email:</p>
            <input className="bg-blueGray-50 md:mr-9 mb-3 md:mb-0 text-xl rounded-2xl h-16 text-darkBlueGray-400 md:max-w-xs lg:max-w-lg w-full px-8 border border-blue-500 outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50" type="text"/>
            <a className="block py-5 px-10 w-full md:w-auto text-xl leading-6 text-white font-medium tracking-tighter font-heading text-center bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl" href="#">Get started</a>
          </div>
        </div>
      </section>
        </>
    )
}

const notfound = () => {
  return (
    <div> <div 
    className="
      flex
      items-center
      justify-center
      bg-linearGridDark
      w-full h-screen
    "
  >
    <div className="lg:px-40 py-20 bg-white rounded-md shadow-2xl">
      <div className="flex flex-col items-center">
        <h1 className="font-bold text-blue-600 text-9xl">404</h1>
  
        <h6 className="mb-2 text-2xl font-bold text-center text-gray-800 md:text-3xl">
          <span className="text-red-500">Oops!</span> Page not found
        </h6>
  
        <p className="mb-8 text-center text-gray-500 md:text-lg">
          The page you’re looking for doesn’t exist or hasnot been completed.
        </p>
  
        <a
          href="/"
          className="px-6 bg-footerdown rounded-xl hover:bg-lightWhite py-2 text-sm font-semibold text-blue-800 bg-blue-100"
          >Go home</a
        >
      </div>
    </div>
</div>

</div>
  )
}

export default notfound
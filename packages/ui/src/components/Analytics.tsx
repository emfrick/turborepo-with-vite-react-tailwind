export const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img 
          className="w-[500px] mx-auto my-4"
          src="https://raw.githubusercontent.com/fireclint/data-finance-react-tailwind/main/src/assets/laptop.jpg" 
          alt="Laptop Image" />
        <div className="flex flex-col justify-center">
          <p className="uppercase text-[#00df9a] font-bold">Data Analytics Dashboard</p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Manage Data Analytics Centrally</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque id tristique magna. Curabitur felis ante, ornare et libero non, placerat vestibulum nisi. Aenean sodales, elit nec tempor eleifend, diam diam commodo nunc, vitae egestas nisl nibh in neque. Integer at finibus dolor. Fusce convallis, lorem sit amet placerat vehicula, erat turpis gravida neque, in auctor felis felis at dui. Proin ut massa est. Vestibulum sollicitudin dolor ac consectetur ullamcorper. Pellentesque velit ligula, molestie at nisl sit amet, rutrum condimentum dolor. 
          </p>
          <button className="bg-black w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3 text-[#00df9a]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

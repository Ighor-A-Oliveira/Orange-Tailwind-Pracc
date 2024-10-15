import "./App.css";
function App() {
  return (
    <main className="bg-pale_orange h-screen flex items-center justify-center box-border">
  <div className="bg-white bg-mobile bg-no-repeat bg-bottom lg:bg-desktop flex-col lg:flex lg:flex-row
                  justify-center items-center
                  p-[15px] lg:p-[25px] max-w-[300px] md:max-w-[400px] lg:max-w-[800px] lg:max-h-[400px]
                  shadow-[5px_5px_0_orange]">
    <img className="lg:mr-[15px] w-full max-w-[300px] md:max-w-[350px] max-h-[350px] mx-auto" src='orange.png' alt="A single orange" />
    <div className="lg:pl-[15px] w-full max-w-[300px] md:max-w-[350px] mx-auto">
      <h1 className="font-title font-bold text-2xl md:text-3xl">A single orange</h1>
      <p className="font-title font-thin text-xl">with stem and leaf</p>
      <h2 className="font-josef text-3xl font-light mb-1">$1<span className="text-sm">.35</span></h2>
      <p className="text-sm font-josef font-light text-wrap">Experience a burst of sunshine in every bite with this hand-picked, sun-drenched jewel of the citrus world.</p>
      <div className="flex items-center">
        <button className="bg-gradient-to-t hover:bg-gradient-to-b from-orange to-light_orange text-white px-12 py-3 lg:p-3 my-3 mr-2 font-josef text-center">ADD TO CART</button>
        <svg className="fill-orange font-thin hover:cursor-pointer hover:scale-125 transition-transform duration-300" xmlns="http://www.w3.org/2000/svg" height="45px" viewBox="0 -960 960 960"><path d="m480-120-58-52q-101-91-167-157T150-447.5Q111-500 95.5-544T80-634q0-94 63-157t157-63q52 0 99 22t81 62q34-40 81-62t99-22q94 0 157 63t63 157q0 46-15.5 90T810-447.5Q771-395 705-329T538-172l-58 52Zm0-108q96-86 158-147.5t98-107q36-45.5 50-81t14-70.5q0-60-40-100t-100-40q-47 0-87 26.5T518-680h-76q-15-41-55-67.5T300-774q-60 0-100 40t-40 100q0 35 14 70.5t50 81q36 45.5 98 107T480-228Zm0-273Z"/></svg>
      </div>
      <h3 className="font-josef font-light text-sm">FEATURES</h3>
      <ul className="font-josef font-light text-xs list-disc marker:text-orange pl-[15px]"> 
        <li><span className="font-medium">Natures candy</span>: A symphony of sweet and tangy notes</li>
        <li><span className="font-medium">Vibrant hue</span>: A visual feast for the eyes</li>
        <li><span className="font-medium">Invigorating aroma</span>: A sensory delight</li>
        <li><span className="font-medium">Nutrient-rich</span>: Bursting with Vitamin C</li>
        <li><span className="font-medium">Perfect for</span>: snacking, juicing, or culinary creations</li>
      </ul>
    </div>
  </div>
</main>

  );
}

export default App;

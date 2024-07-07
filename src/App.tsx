import data from "./assets/index.json"
import images from "./assets/images.json"


let randIMAGE = Math.floor(Math.random() * images.length)

const timeNow = new Date()
let greetings: string;

if (timeNow.getHours() < 12) {
  greetings = "Good Morning"
} else if (timeNow.getHours() < 18) {
  greetings = "Good Afternoon"
} else {
  greetings = "Good Evening"
}

function App() {
  return (
    <div className="relative h-screen w-full">
      <div
        style={{ backgroundImage: `url(${images.map((item) => item.url)[randIMAGE]})` }}
        className="absolute inset-0 bg-cover bg-center blur-sm">
      </div>

      <div className="relative h-full w-full">
        {/* top bar */}
        <div className="flex justify-start items-end space-x-8 p-10">
          <p className="lg:text-9xl md:text-6xl text-3xl font-pixelify text-theme-base06 w-fit">
            {timeNow.getHours()}:{timeNow.getMinutes()}
          </p>
          <p className="lg:text-3xl text-xl font-pixelify text-theme-base06 lg:mb-4">
            Welcome Back, {greetings} User...
          </p>
        </div>
        <div className="flex flex-col top-1/2 absolute left-6">
          <p className="text-3xl font-pixelify text-theme-base06 pb-5"> <span className="text-theme-base08 pr-5">&#8594;</span>BookMarks</p>
          {data.map((item) => (
            <a className="text-3xl font-pixelify text-theme-base06 pl-12 pb-4 hover:text-theme-base0A text-start" href={item.url} key={item.name}>{item.name.toUpperCase()}</a>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App

import Card from './components/card'

// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'


function App() {
 

  return (
    <>
      {/* <Sidebar /> */}
      <h1 className= 'bg-green-400 text-black p-4 rounded-xl '>Talwind test</h1>
      {/* <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mt-2">
  <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/16197836/pexels-photo-16197836/free-photo-of-woman-in-a-leather-jacket-and-with-a-camera-on-the-beach.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" width="384" height="512" />
  <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
    <blockquote>
      <p className="text-lg font-medium">
        “Tailwind CSS is the only framework that I ve seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption className="font-medium">12`+65'
      <div className="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div className="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */} 
  
    <Card username="Leena Mehta" btntxt="socials" lnk="https://www.pexels.com/discover/people-photography/" />    {/*in this card we want to add multiple values and images so we use props (in whic we got value through arry)is calles props */}
    <Card username="kartik mehta" btntxt="socials" lnk="https://github.com/kartikmehta18"/>    {/* passing values is props */}

    <Card username="Leena Mehta" btntxt="socials" />  
    <Card username="kartik mehta"/>
    </>
  )
}

export default App

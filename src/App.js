import Cards from './components/Cards';
// import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
   <>
    <Navbar />
    
    <div className='d-flex gap-4 justify-content-center pt-5'>
      
     <Cards
        title="Javascript"
        src="https://media.istockphoto.com/id/1253430957/photo/professional-developer-programmer-cooperation-meeting-and-brainstorming-and-programming-in.jpg?s=2048x2048&w=is&k=20&c=aieOSrNdkfo5Z4ZdiwlyaUyGaJKkyU1tNdg5-E66Wr0="
        prag="Welcome to my site what can you buy ? let's check this option"
        />
      <Cards
         title="React Js"
         src="https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg"
         prag="Welcome to my site what can you buy ? let's check this option"
       />
       <Cards
          title="Node JS"
          src="https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          prag="Welcome to my site what can you buy ? let's check this option"
          />
    </div>

    </>
  

  );
}

export default App;

import { TypeAnimation } from 'react-type-animation';
import ScrollVelocity from '../blocks/TextAnimations/ScrollVelocity/ScrollVelocity';
import Header from '../components/Header';
import Spacer from '../components/spacer';

export default function Home() {
  return (
    <div className="h-full w-full p-0 m-0">
      <div className="relative w-full h-200 bg-[url('/hero.jpg')] bg-cover bg-center">
        {/* Optional overlay */}
        <div className="absolute inset-0 z-0 bg-black/60" />
          {/* Content goes here */}
          <div className="relative justify-center z-10 h-full">
          <Header />
            <div className = "absolute left-20 bottom-50">
              <h1 className="font-hair text-w text-4xl font-bold text-6xl">Everest Martin</h1>
              <TypeAnimation
                className="absolute right-0 font-geoB text-w text-lg"
                preRenderFirstString={true}
                sequence={[
                  'I am an Aerospace Engineer', // Types 'One'
                  3000, // Waits 1s
                  'I am an Critical Thinker', // Deletes 'One' and types 'Two'
                  3000, // Waits 2s
                  'I am an Programer', // Types 'Three' without deleting 'Two'
                  3000,
                  'I am an Tinkerer', // Types 'One'
                  3000, // Waits 1s
                  'I am an Mathmaician', // Deletes 'One' and types 'Two'
                  3000, // Waits 2s
                  'I am an Rock Climber', // Types 'Three' without deleting 'Two'
                  3000,
                  'I am an Brother', // Types 'Three' without deleting 'Two'
                  3000,
                ]}
                wrapper="span"
                repeat={Infinity}
                style={{ display: 'inline-block' }}
              />
            </div>
          </div>
      </div>
      
      <ScrollVelocity
        className="font-inter text-b2 text-lg"
        texts={['Self Learning - Creative Problem Solving - MATLAB - Python - JavaScript - Analytical Skills - Communication', 'Self Learning - Creative Problem Solving - MATLAB - Python - JavaScript - Analytical Skills - Communication']} 
        velocity={10} 
      />
      <br></br>
      <Spacer />




      <div className="h-200">

      </div>
    </div>
  );
}

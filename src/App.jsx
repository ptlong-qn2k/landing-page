import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Header from './Components/Header';
import Component1 from './Components/Component1';
import Component2 from './Components/Component2';
import Component3 from './Components/Component3';
import Component4 from './Components/Component4';
import Component5 from './Components/Component5';
import Component6 from './Components/Component6';
import Component7 from './Components/Component7';
import Footer from './Components/Footer';

function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="w-[1440px] mx-auto md:w-full lg:w-full">
            <Header />
            <Component1 />
            <Component2 />
            <Component3 />
            <Component4 />
            <Component5 />
            <Component6 />
            <Component7 />
            <Footer />
        </div>
    );
}

export default App;

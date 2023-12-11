import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./assets/components";
  import './i18n';
import { useTranslation } from 'react-i18next';
const App = () => {
  

  const  {t} = useTranslation();

  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar  t={t} />
          <Hero t={t} />
        </div>
        <About  />
        <Experience t={t}  />
        <Tech  />
        <Works  />
        <Feedbacks />
        <div className='relative z-0'>
          <Contact  />
          <StarsCanvas  />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
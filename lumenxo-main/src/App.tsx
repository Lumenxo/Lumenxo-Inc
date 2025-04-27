import React, { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { useGlobalContext } from './context/GlobalContext';
import { Cursor } from './components/ui/Cursor';
import { ParticleBackground } from './components/background/ParticleBackground';
import { BackToTop } from './components/ui/BackToTop';
import GridBackground from './components/background/GridBackground';

const App: React.FC = () => {
  const { isLoading, setIsLoading } = useGlobalContext();

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, [setIsLoading]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <AnimatePresence mode="wait">
      <div className="app relative overflow-hidden">
        <GridBackground />
        <ParticleBackground />
        <Cursor />
        <BackToTop />
        <RouterProvider router={router} />
      </div>
    </AnimatePresence>
  );
};

export default App;
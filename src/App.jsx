import { createContext, useContext, useState } from "react";
import ButtonContainer from "./components/ButtonContainer";
import Card from "./components/Card";
import { motion } from "framer-motion";

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const AppContext = createContext();

function App() {
  const [height, setHeight] = useState("w-0");
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AppContext.Provider value={{ height, setHeight, setIsOpen }}>
      <div className="flex h-screen flex-col gap-10 bg-gradient-to-t from-slate-200/90 to-slate-50 p-10">
        <ButtonContainer />
        {/* <Card /> */}

        <motion.div
          animate={isOpen ? "open" : "closed"}
          variants={variants}
          className="overflow-hidden rounded-xl bg-white shadow-xl"
        >
          <div className="w-full bg-[#374082] p-4">
            <h1 className="text-lg">SparkOS</h1>
            <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit</h4>
          </div>
        </motion.div>
      </div>
    </AppContext.Provider>
  );
}

export const useAppContext = () => useContext(AppContext);
export default App;

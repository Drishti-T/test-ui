import { Navbar } from "components/NavBar";
import { UpperLayout } from "layouts/UpperLayout";
import { cn } from "utils/cn";

export const Main = () => {


  return (
    <div
      className={cn('flex flex-col items-center w-full h-screen overflow-hidden relative  flex items-center justify-center bg-[#16171f]')}  
    >
      {/* Content container: full height of screen using --vh */}
      <div className={cn('w-[92%]  h-fit flex flex-col justify-center items-center gap-2')}>
        {/* Top section */}
        <Navbar />

        {/* Bottom section: fills remaining space */}
        <div className={cn('w-full h-fit')}>
          <UpperLayout />
        </div>
      </div>
    </div>
  );
};

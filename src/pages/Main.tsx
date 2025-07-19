import { Navbar } from "components/NavBar";
import { BottomLayout } from "layouts/BottomLayout";
import { cn } from "utils/cn";

export const Main = () => {


  return (
    <div
      className={cn('flex flex-col items-center w-full h-screen overflow-hidden relative  flex items-center justify-center bg-[#16171f]')}  
    >
      <div className={cn('w-[92%]  h-fit flex flex-col justify-center items-center gap-2')}>
        <Navbar />

        <div className={cn('w-full h-fit')}>
          <BottomLayout />
        </div>
      </div>
    </div>
  );
};

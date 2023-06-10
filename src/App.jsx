
import CustomizeCard from "./components/customize-card/card";
import ProfileCard from "./components/profile-card/card";
import ViewCard from "./components/view-card/card";

export default function App() {
  return (
      <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[784px] h-[784px] bg-[#4D72A9] rounded-full flex relative"> 
      <CustomizeCard/>
      <ProfileCard/>
      <ViewCard/>
      </div>
      </div>
  )
}

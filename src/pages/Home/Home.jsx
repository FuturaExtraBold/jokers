import CTA from "../../components/CTA/CTA";
import FunnyBusiness from "./FunnyBusiness/FunnyBusiness";
import Hero from "./Hero/Hero";
import PunchedUp from "./PunchedUp/PunchedUp";

function Home() {
  return (
    <div className="container">
      <Hero />
      <CTA
        title="You want in on this?"
        description="Sign up for exclusive pre-launch offers"
        buttonText="Sign Up"
        buttonLink="#"
      />
      <FunnyBusiness />
      <PunchedUp />
    </div>
  );
}

export default Home;

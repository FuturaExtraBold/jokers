import CTA from "../../components/CTA/CTA";
import BigReveal from "./BigReveal";
import FunnyBusiness from "./FunnyBusiness";
import Hero from "./Hero/Hero";
import PunchedUp from "./PunchedUp";

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
      <BigReveal />
    </div>
  );
}

export default Home;

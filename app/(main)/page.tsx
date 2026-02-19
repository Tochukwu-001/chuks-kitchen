import ChefSpecials from "@/components/ChefSpecials";
import Hero from "@/components/Hero";
import MenuAdditions from "@/components/MenuAdditions";
import PopularCategories from "@/components/PopularCategories";

export default function Home() {
  return (
    <main>
      <Hero/>
      <PopularCategories/>
      <ChefSpecials/>
      <MenuAdditions/>
    </main>
  );
}
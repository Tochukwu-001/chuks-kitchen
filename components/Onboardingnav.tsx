import Link from "next/link";
import { Styles } from "./Styles";
export default function OnboardingNav() {

  return (
    <nav className="flex items-center justify-between px-6 sm:px-8 lg:px-12 py-6">
      <h1 className="text-4xl italic font-light" style={{ fontFamily: 'Brush Script MT, cursive', color: Styles.primaryOrange }}>
            Chuks Kitchen
          </h1>
      <Link
        href={"/signin"}
        className="px-6 md:px-8 py-2.5 md:py-2 border border-blue-600 text-blue-600 font-semibold rounded-lg">
        Sign In
      </Link>
    </nav>
  );
}

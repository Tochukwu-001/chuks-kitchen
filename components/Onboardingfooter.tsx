import Link from "next/link";

export default function OnboardingFooter (){
    return (
        <main className="">
            <div className="border-t border-gray-200 w-3/4 mx-auto flex max-md:flex-col items-center gap-5 justify-center text-sm py-3 font-semibold">
                <p className="text-gray-700">&copy; 2024 Chuks Kitchen.</p>             
                <Link href={"#"} className="text-blue-500">Privacy Policy</Link>
                <Link href={"#"} className="text-blue-500">Terms of Service</Link>
            </div>
        </main>
    )
}
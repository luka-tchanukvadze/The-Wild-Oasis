import Link from "next/link";
import Navigation from "./components/Navigation";

export default function Page() {
  return (
    <>
      <Navigation />
      <div>hey the wild oasis</div>;
      <Link href={"/cabins"}>Explore luxury cabins</Link>
    </>
  );
}

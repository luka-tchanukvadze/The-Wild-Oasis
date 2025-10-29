import Link from "next/link";

export default function Page() {
  return (
    <>
      <div>hey the wild oasis</div>;
      <Link href={"/cabins"}>Explore luxury cabins</Link>
    </>
  );
}

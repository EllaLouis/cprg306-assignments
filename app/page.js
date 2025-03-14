import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>

      <ul>
        <li><Link href="/week-2">Week 2 page</Link></li>
        <li><Link href="/week-3">Week 3 page</Link></li>
        <li><Link href="/week-4">Week 4 page</Link></li>
        <li><Link href="/week-5">Week 5 page</Link></li>
        <li><Link href="/week-6">Week 6 page</Link></li>
        <li><Link href="/week-7">Week 7 page</Link></li>
      </ul>
    </div>
  );
}
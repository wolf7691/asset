import { unstable_noStore as noStore } from 'next/cache';
import Image from 'next/image';

export default function Home() {
  noStore();
  const timeOnServer = new Date().toUTCString();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <center>
          This is a Next.js application hosted on Azure Static Web Apps with
          hybrid rendering.
        </center>
        <center>
          The date and time on the server is <strong>{timeOnServer}</strong>.
        </center>
      </div>
    </main>
  );
}

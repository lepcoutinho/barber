
import Agenda from "@/components/agenda/agenda";
import Dashboard from "@/components/dashboard/dashboard";
import { Metadata } from 'next'


export default function Home() {
   return (
     <>
      <section className="agenda">
       <Agenda />
       </section>

       <section className="dashboard">
         <Dashboard />
       </section>

     </>


  );
}

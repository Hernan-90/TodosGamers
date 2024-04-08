import { Footer, Header, Notificaciones } from "@/components";

export const metadata = {
  title: 'Listado de Cervecerías',
  description: 'Listado de Cervecerías',
};

export default function GeneralLayout({ children }: { children: React.ReactNode;}) {

  return (
    <div className="app__container">
      <Header />
      <Notificaciones />
      
      <main className="main__section">
        { children }
      </main>

      <Footer />
    </div>
  );
}
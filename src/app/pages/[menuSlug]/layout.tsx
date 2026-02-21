import HeaderMain from '@/app/_components/header-main';
interface LayoutProps {
  children: React.ReactNode;
  params: Promise<{
    menuSlug: string;
  }>;
}
export default async function LayoutMenu({ children, params }: LayoutProps) {
  const { menuSlug } = await params;
  console.log(menuSlug);

  return (
    <main>
      <HeaderMain />
      {children}
    </main>
  );
}

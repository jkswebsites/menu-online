import BannerVertical from '@/app/_components/banner';
import CarouselItems from '@/app/_components/carousel-items';
import Footer from '@/app/_components/footer';
import HeroMain from '@/app/_components/hero-main';
import NavbarOptions from '@/app/_components/navbar-options';
import TitleContainer from '@/app/_components/title-container';
import { navImages } from '@/app/_constants/nav-images';
import { slideImages } from '@/app/_constants/slide-images';
import { hamburguers } from '@/app/_database/hamburguer';
import { pizzas } from '@/app/_database/pizzas';
import img from '@/app/_assets/images/soda/coca-cola-2l.png';
interface MenuPageProps {
  params: {
    slugMain: string;
  };
}
const MenuPage = async ({ params }: MenuPageProps) => {
  const { slugMain } = await params;
  console.log(slugMain);

  const pizzasDiscount = pizzas
    .slice(0, 5)
    .filter((item) => item.discountPercent > 0);
  const hambuguersDiscount = hamburguers
    .slice(0, 5)
    .filter((item) => item.discountPercent > 0);

  return (
    <div className="w-full pt-11 pl-2 lg:px-6">
      <div>
        <div>
          <HeroMain slideImages={slideImages} />
        </div>

        <NavbarOptions options={navImages} />

        <main className="w-full pt-11 pl-2 lg:px-6">
          <div className="my-4">
            <TitleContainer
              subtile="Pizzas"
              distak="35% Off"
              description="nas pizza selecionadas abaixo:"
            />
            <div className="mt-3">
              <CarouselItems items={pizzasDiscount} />
            </div>
          </div>

          <div>
            <BannerVertical
              path="/pages/category/refrigerante"
              src={img}
              title="Vai um Refri ai?"
            />
          </div>
          <div className="mt-5">
            <TitleContainer
              subtile="Hambúrguers"
              distak="25% Off"
              description="nas pizza selecionadas abaixo:"
            />
            <div className="mt-3">
              <CarouselItems items={hambuguersDiscount} />
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default MenuPage;

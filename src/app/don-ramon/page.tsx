import BannerVertical from '../_components/banner';
import CarouselItems from '../_components/carousel-items';
import Footer from '../_components/footer';
import HeroMain from '../_components/hero-main';
import NavbarOptions from '../_components/navbar-options';
import TitleContainer from '../_components/title-container';
import { navImages } from '../_constants/nav-images';
import { slideImages } from '../_constants/slide-images';
import { hamburguers } from '../_database/hamburguer';
import { pizzas } from '../_database/pizzas';
import img from '@/app/_assets/images/soda/coca-cola-2l.png';

export default function HomePage() {
  const pizzasDiscount = pizzas
    .slice(0, 5)
    .filter((item) => item.discountPercent > 0);
  const hambuguersDiscount = hamburguers
    .slice(0, 5)
    .filter((item) => item.discountPercent > 0);
  return (
    <div>
      <div>
        <HeroMain slideImages={slideImages} />
      </div>
      <NavbarOptions options={navImages} />

      <main className="w-full pt-11 pl-2 lg:ml-30 lg:w-200 lg:px-6">
        <div className="my-4">
          <TitleContainer
            subtile="Pizzas mais vendidas"
            distak="Top Pizzas"
            description="sucesso de vendas"
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
  );
}

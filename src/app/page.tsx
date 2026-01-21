import HeroMain from './_components/hero-main';
import NavbarOptions from './_components/navbar-options';
import { slideImages } from './_constants/slide-images';
import { navImages } from './_constants/nav-images';
import TitleContainer from './_components/title-container';
import CarouselItems from './_components/carousel-items';
import { pizzas } from './_constants/products';

export default function Home() {
  const pizzasDiscount = pizzas.filter((item) => item.discountPercent > 0);
  return (
    <div>
      <div>
        <HeroMain slideImages={slideImages} />
      </div>

      <NavbarOptions options={navImages} />

      <main className="w-full p-11">
        <div>
          <TitleContainer
            subtile="Pizzas Descontos da Semana"
            distak="35% Off"
            description="nas pizza selecionadas abaixo:"
          />
          <div className="mt-14">
            <CarouselItems items={pizzasDiscount} />
          </div>
        </div>
      </main>
    </div>
  );
}

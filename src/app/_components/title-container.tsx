interface TitleContainerProps {
  subtile: string;
  distak: string;
  description: string;
}

const TitleContainer = ({
  subtile,
  distak,
  description,
}: TitleContainerProps) => {
  return (
    <div>
      <h3 className="font-oxygen text-lg font-bold tracking-wide text-yellow-400 sm:text-3xl">
        {subtile}
      </h3>
      <p className="font-roboto text-neutral-300">
        <strong className="text-lg font-bold tracking-widest text-yellow-400 sm:text-2xl">
          {distak}
        </strong>{' '}
        {description}
      </p>
    </div>
  );
};

export default TitleContainer;

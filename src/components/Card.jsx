import { useAppContext } from "../App";

const Card = () => {
  const { height } = useAppContext();
  return (
    <div className="mx-80 w-full">
      <div
        className={` smooth ${height} h-0 overflow-hidden rounded-xl bg-white shadow-xl`}
      >
        <div className="h-20 w-full bg-indigo-700">
          <div className="flex flex-col justify-center pl-10 text-[var(--text-color)]">
            <h3 className="text-lg font-semibold text-[var(--text-color)]">
              SparkOS
            </h3>
            <span className="text-base text-slate-300">Hello World</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

import { clsx } from "clsx";
import { BsArrowLeft } from "react-icons/bs";

export function Card({ onClick, addСart, onClickAddCart, id, card }) {
  return (
    <div className="max-w-[1220px] m-auto">
      <button
        className="flex gap-2 items-center ml-6 text-sm mb-20"
        onClick={onClick}
      >
        <BsArrowLeft />
        <p>Назад</p>
      </button>
      <div key={card.id} className="flex justify-between">
        <img
          className="w-[600px] h-[360px]"
          src={card.image.src}
          alt={card.image.alt}
        />
        <div>
          <div className="text-xs w-[420px] flex flex-wrap gap-4 mb-16">
            <h1 className="text-2xl text-my-green font-bold">{card.name}</h1>
            <p>{card.description}</p>
            <p>
              <span className="font-bold">
                Состав пропитки: {card.structure}
              </span>
            </p>
            <p>
              <span className="font-bold">
                Условия хранения: {card.keeping}
              </span>
            </p>
            <p className="font-bold">Срок годности: {card.expirationDate}</p>
          </div>
          <div className="leading-[20px] flex flex-wrap gap-7 mb-16">
            <button className="px-3 py-1 rounded-[50px] border border-black">
              15 шт
            </button>
            <button className="px-3 py-1 rounded-[50px] border border-black">
              20 шт
            </button>
            <button className="px-3 py-1 rounded-[50px] border border-black">
              30 шт
            </button>
          </div>
          <div className="flex gap-6 font-bold mb-16">
            <div className="flex gap-2">
              <button className="text-2xl">-</button>
              <input
                className="border border-black rounded-[50px] w-14 text-center font-normal text-lg"
                type="text"
                value="1"
              />
              <button className="text-xl">+</button>
            </div>
            <p className="text-2xl">{card.price} руб</p>
          </div>
          <button
            id={card.id}
            className={clsx(
              addСart
                ? "px-9 py-4 text-white bg-red-500 rounded-[50px] text-lg mb-28"
                : "px-9 py-4 text-white bg-my-green rounded-[50px] text-lg mb-28"
            )}
            onClick={addСart ? null : onClickAddCart}
          >
            {addСart ? "Товар в корзине" : "Добавить в корзину"}
          </button>
        </div>
      </div>
    </div>
  );
}

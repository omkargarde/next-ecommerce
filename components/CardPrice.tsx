import { FormatMoney } from "@/utils/FormatMoney";

const CardPrice = ({
  price,
  discount,
  quantity,
}: {
  price: number;
  discount: number | null;
  quantity?: number;
}) => {
  if (!discount) {
    return (
      <>
        {quantity}
        <p>{FormatMoney(price)}</p>
      </>
    );
  }
  return (
    <>
      <div className="">
        <span>{FormatMoney(price - price * (discount / 100))}</span>
        <span className="px-2 text-slate-500 line-through">
          {FormatMoney(price)}
        </span>
        <span className="text-green-600">{discount}% off</span>
      </div>
    </>
  );
};

export default CardPrice;

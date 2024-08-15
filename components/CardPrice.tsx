import { FormatMoney } from "@/utils/FormatMoney";

const CardPrice = ({
  price,
  discount,
}: {
  price: number;
  discount: number | null;
}) => {
  if (!discount) {
    return <p>{FormatMoney(price)}</p>;
  }
  return (
    <div className="">
      <span>{FormatMoney(price - price * (discount / 100))}</span>
      <span className="px-2 text-slate-500 line-through">
        {FormatMoney(price)}
      </span>
      <span className="text-green-600">{discount}% off</span>
    </div>
  );
};

export default CardPrice;

const CoinCard = ({ tokenPrice, btcPrice }) => {
  return (
    <li className="text-xl flex justify-center items-center">
      <img
        className="w-12 inline-block"
        src={`./images/${tokenPrice.market.substring(4)}.png`}
        alt={`${tokenPrice.market.substring(4)}`}
      />
      <span className="ml-2 w-16 inline-block">
        {tokenPrice.market.substring(4)}
      </span>
      <span className="ml-2">
        ₩{" "}
        {tokenPrice.market.substring(0, 3) === "BTC"
          ? parseFloat(
              (tokenPrice.trade_price * btcPrice).toFixed(2)
            ).toLocaleString()
          : tokenPrice.trade_price.toLocaleString()}
      </span>
    </li>
  );
};

export default CoinCard;

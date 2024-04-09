import Deal from "./Deal/Deal";

const DealList = ({ sortedDeals }) => {
  return (
    <main data-testid="deal-list">
      {sortedDeals?.map((deal, index) => (
        <Deal deal={deal} key={deal?.title + index} />
      ))}
    </main>
  );
};

export default DealList;

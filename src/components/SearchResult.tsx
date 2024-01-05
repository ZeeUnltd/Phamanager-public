import DrugCard from "./DrugCard";

type Product = {
  drugName: string;
  pharmacy: string;
  details: string;
  description: string;
  price: number;
  id: number;
};

const results: Product[] = Array.from({ length: 4 }, () => {
  return {
    drugName: "Penicillin Ointment",
    pharmacy: "Rx Pharmacy, Oshodi",
    details: "200mg l 1 Tube l 2 drops per use",
    description:
      "Penicillin is used to treat and prevent minor skin infections caused by small cuts or burns.",
    price: 1000,
    id: Math.random() * 10,
  };
});

const SearchResult = () => {
  return (
    <div>
      {results.map((result: Product) => (
        <DrugCard
          key={result.id}
          drugName={result.drugName}
          pharmacy={result.pharmacy}
          details={result.details}
          description={result.description}
          price={result.price}
          id={result.id}
        />
      ))}
    </div>
  );
};

export default SearchResult;

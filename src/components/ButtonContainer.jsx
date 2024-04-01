import Button from "./Button";

const data = [
  { id: 1, text: "Products" },
  { id: 2, text: "Services" },
  { id: 3, text: "Why Spark.io?" },
];

const ButtonContainer = () => {
  return (
    <div className="flex items-center justify-center gap-8">
      {data.map((item) => (
        <Button key={item.id} {...item} />
      ))}
    </div>
  );
};

export default ButtonContainer;

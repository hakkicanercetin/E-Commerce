interface CategoryProps {
  image?: string;
}
const Category = ({image}:CategoryProps) => {
  return (
    
    <div className="py-3">
      <img src={image} alt="category" />
    </div>
  );
};

export default Category;

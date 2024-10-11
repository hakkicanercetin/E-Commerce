import { Link } from "react-router-dom";
import { Category as CategoryData } from "../../../../Types/APICategory";

interface ExtendedCategoryData extends CategoryData {
  image: string;
}

const Category = ({ categoryData }: {categoryData:ExtendedCategoryData}) => {
  return (
    <div className="py-3">
      <Link to={categoryData.slug}>
        <img src={categoryData.image} alt="category" />
      </Link>
    </div>
  );
};

export default Category;

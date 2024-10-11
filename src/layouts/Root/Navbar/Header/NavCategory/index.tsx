import { useLoaderData } from "react-router";
import classes from "./index.module.css";
import { FaChevronRight, FaChevronDown } from "react-icons/fa";
import { RootLoader } from "../../../../../API";
import { Link } from "react-router-dom";
import { useState } from "react";

const MobileNavCategory = ({ isOpen }: { isOpen: boolean }) => {
  const {
    categories: {
      data: { data: categories },
    },
  } = useLoaderData() as Awaited<ReturnType<typeof RootLoader>>;

  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [openSubIndex, setOpenSubIndex] = useState<number | null>(null);

  const toggleSubCategories = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const toggleSubChildren = (subIndex: number) => {
    setOpenSubIndex(openSubIndex === subIndex ? null : subIndex);
  };

  return (
    <div className={isOpen ? classes.closeNav : classes.openNav}>
      <div className="px-2 bg-white">
        {categories.map((category, index) => (
          <div key={index}>
            <li
              onClick={() => toggleSubCategories(index)}
              className="text-base flex py-2 justify-between items-center cursor-pointer"
            >
              {category.name}
              {openIndex === index ? (
                <FaChevronDown />
              ) : (
                <FaChevronRight />
              )}
            </li>
            {openIndex === index && (
              <div className="pl-5">
                {category.children?.map((subCategory, subIndex) => (
                  <div key={subCategory.id}>
                    <p
                      onClick={() => toggleSubChildren(subIndex)}
                      className="text-base py-2 flex justify-between items-center cursor-pointer"
                    >
                      {subCategory.name}
                      {openSubIndex === subIndex ? (
                        <FaChevronDown />
                      ) : (
                        <FaChevronRight />
                      )}
                    </p>
                    {openSubIndex === subIndex && (
                      <div className="pl-5 flex flex-col">
                        {subCategory.sub_children?.map((child,index) => (
                          <Link to={`products/${child.slug}`} key={index} className="text-base py-2 border-b-2">
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
        <Link to={"/products"} className="text-base flex py-2 justify-between items-center">
          TÜM ÜRÜNLER
        </Link>
      </div>
      <ul className="bg-[#e5e5e5] px-2 h-80">
        <li className="text-base py-2">HESABIM</li>
        <li className="text-base py-2">MÜŞTERİ YORUMLARI</li>
        <li className="text-base py-2">İLETİŞİM</li>
      </ul>
    </div>
  );
};

export default MobileNavCategory;

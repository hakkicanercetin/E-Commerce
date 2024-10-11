import { useLoaderData } from "react-router";
import { RootLoader } from "../../../../API";
import { Link } from "react-router-dom";

const Menu = () => {
  const {
    categories: {
      data: { data:categories },
    },
  } = useLoaderData() as Awaited<ReturnType<typeof RootLoader>>;
  return (
    <>
      <div className="bg-[#222222] max-[767px]:hidden ">
        <div className="min-[1700px]:px-[360px] px-[225px] max-[1368px]:px-[175px] max-[1200px]:px-[150px] max-[992px]:px-[76px] flex text-white justify-between text-xs">
          {categories.map((category) => (
            <div key={category.order} className="group">
              <p className="leading-[35px]">
                {category.name}
              </p>
              <div className="absolute hidden group-hover:flex left-0 right-0 w-auto h-auto overflow-hidden justify-center">
              <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 pointer-events-none"></div>

                <div className="bg-transparent pt-4 container rounded-lg z-20 relative">
                  <div className="z-20 container grid grid-cols-12 gap-6 h-auto max-h-[80vh] overflow-auto bg-white rounded-lg shadow-alternative text-black">
                    <div className="col-span-3 bg-[#E1E1E1] flex flex-col gap-4 h-full py-6 px-5">
                      <p className="text-xl font-semibold">EN ÇOK SATANLAR</p>

                      {category.top_sellers.map((tSeller) => (
                        <div key={tSeller.slug} className="flex items-center py-5 text-black">
                          <img
                            className="w-16 aspect-square"
                            src={`https://fe1111.projects.academy.onlyjs.com/${tSeller.picture_src}`}
                            alt=""
                          />
                          <p className="pl-2 font-semibold text-xl">
                            {tSeller.name}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="flex col-span-8 text-black">
                    {category.children?.map((subCategory) => (
                      <div
                        key={subCategory.id}
                        className="px-2 pt-2 font-bold"
                      >
                        <p className="text-xl">{subCategory.name}</p>
                        {subCategory.sub_children.map((child) => (
                          <div key={child.order}>
                            <Link to={`products/${child.slug}`} className="font-normal text-base py-1">
                              {child.name}
                            </Link>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Link to={"/products"} className="leading-[35px]">
            TÜM ÜRÜNLER
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;

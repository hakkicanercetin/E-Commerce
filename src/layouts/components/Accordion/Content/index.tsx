import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { NutritionalContentType, PropertiesType, UsageType } from "..";

const AccordionContent = ({
  property,
  ingred,
  usg,
}: {
  property?: PropertiesType;
  ingred?: NutritionalContentType;
  usg?: UsageType;
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [rotate, setRotate] = useState(false);
  const handleToogle = () => {
    setIsOpen(!isOpen);
    setRotate(!rotate);
  };
  return (
    <>
      <div className="list-none my-3 border-t-2">
        <button onClick={handleToogle} className="w-full cursor-pointer py-2">
          <div className="flex justify-between items-center text-left py-2">
            <div>
              <p className="text-xl font-bold">{property && property.title}</p>
              <p className="text-xl font-bold">{ingred && ingred.title}</p>
              <p className="text-xl font-bold">{usg && usg.title}</p>
            </div>
            <div className={rotate ? "-rotate-180" : ""}>
              <IoIosArrowDown />
            </div>
          </div>
        </button>
      </div>

      {isOpen && (
        <div className="mb-12">
          {ingred && (
            <>
              {ingred.content.nutrition_facts.ingredients.length > 1 &&
                !!ingred.content.nutrition_facts.ingredients && (
                  <div>
                    <div className="flex justify-between items-center">
                      <div className="py-2">
                        <p className="text-xl font-semibold">BESİN DEĞERLERİ</p>
                      </div>
                      {ingred.content.nutrition_facts.portion_sizes.map(
                        (newData, index) => (
                          <p key={index}>{newData}</p>
                        )
                      )}
                    </div>
                    {ingred.content.nutrition_facts.ingredients.map(
                      (newData, index) => (
                        <div
                          key={index}
                          className="flex justify-between py-1 border-b-2"
                        >
                          <p>{newData.name}</p>
                          <p>{newData.amounts}</p>
                        </div>
                      )
                    )}
                  </div>
                )}
              <div className="py-2 mt-4">
                <p className="text-xl font-semibold">İÇİNDEKİLER</p>
              </div>
              {ingred.content.ingredients.map((newData, index) => (
                <div key={index} className="mb-4">
                  <p>
                    <strong>
                      {newData.aroma ? newData.aroma : "Aromasız"}
                    </strong>
                    : {newData.value}
                  </p>
                </div>
              ))}
              {ingred.content.amino_acid_facts && (
                <div>
                  <div className="flex justify-between items-center">
                  <div className="py-2">
                <p className="text-xl font-semibold">AMİNO ASİT DEĞERLERİ</p>
              </div>
                    {ingred.content.amino_acid_facts.portion_sizes.map(
                      (newData, index) => (
                        <p key={index}>{newData} servis için</p>
                      )
                    )}
                  </div>
                  {ingred.content.amino_acid_facts.ingredients.map(
                    (newData, index) => (
                      <div key={index} className="flex justify-between py-1 border-b-2 last:border-b-0">
                        <p>{newData.name}</p>
                        <p>{newData.amounts}</p>
                      </div>
                    )
                  )}
                </div>
              )}
            </>
          )}
          {property && <p>{property.content}</p>}
          {usg && <p>{usg.content}</p>}
        </div>
      )}
    </>
  );
};

export default AccordionContent;

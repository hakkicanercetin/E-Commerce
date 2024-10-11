import { NutritionalContent } from "../../../Types/APIProduct";
import AccordionContent from "./Content";
export type PropertiesType = {
  title: string;
  content: string;
};
export type NutritionalContentType = {
  title: string;
  content: NutritionalContent;
};
export type UsageType = {
  title: string;
  content: string;
};

const Accordion = ({
  property,
  ingred,
  usg,
}: {
  property: PropertiesType;
  ingred: NutritionalContentType;
  usg: UsageType;
}) => {
  return (
    <div>
      {
        <AccordionContent property={property} />
      }
      {
        <AccordionContent ingred={ingred} />
      }
      {
        <AccordionContent usg={usg} />
      }
    </div>
  );
};

export default Accordion;

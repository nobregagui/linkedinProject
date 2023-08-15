import { IPropsDynamicDescription } from "../../../utils/interfaces";
import { Description } from "./DynamicDescription.style";

export default function DynamicDescription({
  description,
  descriptionSizing,
}: IPropsDynamicDescription) {
  return (
    <>
      {description && (
        <Description
          description={description}
          descriptionSizing={descriptionSizing}
        >
          {description}
        </Description>
      )}
    </>
  );
}

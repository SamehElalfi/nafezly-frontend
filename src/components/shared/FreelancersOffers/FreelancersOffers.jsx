import React from "react";
import BoxCard from "components/shared/boxCard/BoxCard";

/**
 * It renders a list of offers.
 * @returns The return is a div with a class of flex. Within the flex there is a span and a div. The
 * span is the text "العروض المقدمة" and the div is the icon.
 */
export function FreelancersOffers() {
  return (
    <BoxCard
      title="العروض المقدمة"
      hasDropdownIcon={true}
    >
      <div>1</div>
      <div>2</div>
    </BoxCard>
  );
}

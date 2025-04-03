import { TabState } from "@/components/ConfiguratorPage/Configurator/ConfiguratorParent";
import { ConfiguratorData } from "@/data";

export const formatNumberToCurrency = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",

    trailingZeroDisplay: "stripIfInteger", // This is probably what most people
  });

  // Use the formatter with the value of an input.
  return formatter.format(price);
};

// export const calculateTotalPrice = (
//   configuratorData: ConfiguratorData,
//   activeTab: TabState
// ) => {
//   let totalPrice = 0;

//   if (configuratorData) {
//     // Iterate through each key in the data object
//     for (const key of Object.keys(configuratorData) as Array<
//       keyof ConfiguratorData
//     >) {
//       if (Array.isArray(configuratorData[key])) {
//         // Filter for items where `isSelected` is true and have a `price` property
//         const selectedItems = configuratorData[key].filter(
//           (item) =>
//             item.isSelected && "price" in item && typeof item.price === "number"
//         );

//         // Add their prices to the total
//         selectedItems.forEach((item) => {
//           // TODO: verify it
//           totalPrice += (item as unknown as { price: number }).price;
//         });
//       }
//     }

//     return totalPrice;
//   } else {
//     return 0;
//   }
// };

type PricedItem = {
  isSelected: boolean;
  price?: number;
  lease?: {
    weekly: {
      price: number;
    };
  };
};
export const calculateTotalPrice = (
  configuratorData: ConfiguratorData,
  activeTab: TabState
) => {
  let totalPrice = 0;

  if (!configuratorData) {
    return 0;
  }

  const processArray = (items: PricedItem[]) => {
    items
      .filter(
        (item) =>
          item.isSelected &&
          ("price" in item ||
            (activeTab === "lease" && item.lease?.weekly.price !== undefined))
      )
      .forEach((item) => {
        if (activeTab === "cash") {
          totalPrice += item.price || 0;
        } else if (item.lease?.weekly.price !== undefined) {
          totalPrice += item.lease.weekly.price;
        }
      });
  };

  for (const key of Object.keys(configuratorData) as Array<
    keyof ConfiguratorData
  >) {
    const value = configuratorData[key];

    if (key === "chooseYourFinish") {
      // Handle nested cash/lease structure
      const FinishValue = value as ConfiguratorData["chooseYourFinish"];
      processArray(activeTab === "cash" ? FinishValue.cash : FinishValue.lease);
    } else if (
      key === "chooseYourLayoutFor16" ||
      key === "chooseYourLayoutFor25"
    ) {
      // Only process the relevant layout based on selected model
      const selectedModel = configuratorData.chooseYourModel.find(
        (m) => m.isSelected
      );
      if (
        selectedModel?.name === "Space One" &&
        key === "chooseYourLayoutFor16"
      ) {
        processArray(value as PricedItem[]);
      } else if (
        selectedModel?.name === "Space One Plus" &&
        key === "chooseYourLayoutFor25"
      ) {
        processArray(value as PricedItem[]);
      }
    } else if (Array.isArray(value)) {
      processArray(value);
    }
  }

  return totalPrice;
};

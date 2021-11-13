import {
  ADDRESS,
  ADDRESS_FA,
  ADDRESS_INFORMATION,
  ADD_ADDRESS,
  CITY,
  CITY_FA,
  PROVINCE,
  PROVINCE_FA,
  SELECT,
  TEXTAREA,
} from "../../../../constant/messages";

export const formStructure = {
  addressInformation: {
    title: ADDRESS_INFORMATION,
    form: [
      {
        id: 1,
        size: 6,
        type: SELECT,
        name: CITY,
        placeholder: CITY_FA,
        label: CITY_FA,
        labelRequired: true,
        data: [
          { id: 1, title: "تهران" },
          { id: 2, title: "قم" },
          { id: 3, title: "اهواز" },
          { id: 4, title: "خرم آباد" },
        ],
        validation: {
          required: true,
          minLength: 1,
          maxLength: 250,
        },
      },
      {
        id: 2,
        size: 6,
        type: SELECT,
        name: PROVINCE,
        placeholder: PROVINCE_FA,
        label: PROVINCE_FA,
        labelRequired: true,
        data: [
          { id: 1, title: "تهران" },
          { id: 2, title: "قم" },
          { id: 3, title: "خوزستان" },
          { id: 4, title: "لرستان" },
        ],
        validation: {
          required: true,
          minLength: 1,
          maxLength: 250,
        },
      },
      {
        id: 3,
        size: 12,
        inline: true,
        type: TEXTAREA,
        labelRequired: true,
        name: ADDRESS,
        placeholder: ADD_ADDRESS,
        label: ADDRESS_FA,
        rows: 5,
        validation: {
          required: true,
          minLength: 10,
          maxLength: 512,
        },
      },
    ],
  },
};

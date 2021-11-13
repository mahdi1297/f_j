/* eslint-disable no-unused-vars */
import { WEBSITE_REGAX_VALIDATOR } from "../../../../constant/regax";
import {
  ADDRESS,
  CITY_FA,
  COMPONY_ADDRESS_FA,
  COMPONY_CITY,
  COMPONY_NAME,
  COMPONY_NAME_FA,
  COMPONY_SHORT_DESCRIPTION_FA,
  COMPONY_WEBSITE_FA,
  DATEPICKER,
  DESCRIPTION,
  FIELD,
  FIELD_FA,
  FILE,
  FOUNDED_DATE,
  FOUNDED_DATE_FA,
  LOGO,
  LOGO_FA,
  MAIN_IMAGE,
  MAIN_IMAGE_FA,
  NUMBER,
  SELECT,
  TEXT,
  TEXTAREA,
  WEBSITE,
  WORKERS,
  WORKERS_FA,
} from "./../../../../constant/messages";

export const formStructure = (isRegistered) => {
  let formData = [
    {
      id: 1,
      type: TEXT,
      size: 12,
      label: COMPONY_NAME_FA,
      labelRequired: true,
      name: COMPONY_NAME,
      validation: {
        required: isRegistered && true,
        minLength: isRegistered && 2,
        maxLength: isRegistered && 300,
      },
    },
    {
      id: 2,
      type: TEXT,
      size: 12,
      label: FIELD_FA,
      labelRequired: true,
      name: FIELD,
      validation: {
        required: isRegistered && true,
      },
    },
    {
      id: 4,
      type: NUMBER,
      size: 12,
      label: WORKERS_FA,
      labelRequired: true,
      name: WORKERS,
      validation: {
        required: isRegistered && true,
        minLength: isRegistered && 2,
        maxLength: isRegistered && 10,
      },
    },

    {
      id: 3,
      type: TEXTAREA,
      size: 12,
      rows: 8,
      label: COMPONY_SHORT_DESCRIPTION_FA,
      labelRequired: true,
      name: DESCRIPTION,
      validation: {
        required: isRegistered && true,
        minLength: isRegistered && 2,
        maxLength: isRegistered && 3000,
      },
    },
    {
      id: 7,
      type: TEXTAREA,
      size: 12,
      rows: 4,
      label: COMPONY_ADDRESS_FA,
      labelRequired: true,
      name: ADDRESS,
      validation: {
        required: isRegistered && true,
        minLength: isRegistered && 2,
        maxLength: isRegistered && 500,
      },
    },
    {
      id: 6,
      type: SELECT,
      size: 12,
      label: CITY_FA,
      labelRequired: true,
      name: COMPONY_CITY,
      data: [
        { id: 1, title: "قم" },
        { id: 2, title: "تهران" },
        { id: 3, title: "شیراز" },
        { id: 4, title: "مشهد" },
        { id: 5, title: "اصفهان" },
        { id: 6, title: "کاشان" },
      ],
      validation: {
        required: isRegistered && true,
      },
    },
    {
      id: 8,
      type: TEXT,
      size: 12,
      rows: 4,
      label: COMPONY_WEBSITE_FA,
      labelRequired: true,
      name: WEBSITE,
      validation: {
        required: isRegistered && true,
        minLength: isRegistered && 2,
        maxLength: isRegistered && 300,
        pattern: WEBSITE_REGAX_VALIDATOR,
      },
    },
    {
      id: 9,
      size: 12,
      type: DATEPICKER,
      label: FOUNDED_DATE_FA,
      labelRequired: true,
      name: FOUNDED_DATE,
      notApplyError: true,
      validation: {
        required: isRegistered && false,
      },
    },
  ];
  return formData;
};

export const logoFormStructure = {
  type: FILE,
  size: 12,
  label: LOGO_FA,
  labelRequired: true,
  name: LOGO,
};
export const coveFormStructure = {
  type: FILE,
  size: 12,
  label: MAIN_IMAGE_FA,
  labelRequired: true,
  name: MAIN_IMAGE,
};

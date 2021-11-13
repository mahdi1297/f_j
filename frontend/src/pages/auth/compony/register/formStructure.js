import { Text } from "../../../../constant";
import {
  CORPORRATION_EMAIL_FA,
  CORPORRATION_EMAIL_SAMPLE,
  EMAIL,
  PASSWORD,
  PASSWORD_FA,
  PASSWORD_SAMPLE,
} from "../../../../constant/messages";

export const formStructure = [
  {
    id: 1,
    size: 12,
    type: Text,
    placeholder: CORPORRATION_EMAIL_SAMPLE,
    name: EMAIL,
    label: CORPORRATION_EMAIL_FA,
    validation: {
      required: true,
      maxLength: 220,
      minLength: 2,
    },
  },
  {
    id: 2,
    size: 12,
    type: PASSWORD,
    placeholder: PASSWORD_SAMPLE,
    name: PASSWORD,
    label: PASSWORD_FA,
    validation: {
      required: true,
      maxLength: 20,
      minLength: 5,
    },
  },
];

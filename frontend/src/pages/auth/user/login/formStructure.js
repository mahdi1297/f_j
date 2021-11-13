import { Text } from "../../../../constant";
import {
  EMAIL,
  EMAIL_FA,
  EMAIL_SAMPLE,
  PASSWORD,
  PASSWORD_FA,
  PASSWORD_SAMPLE,
} from "../../../../constant/messages";

export const formStructure = [
  {
    id: 1,
    size: 12,
    type: Text,
    placeholder: EMAIL_SAMPLE,
    name: EMAIL,
    label: EMAIL_FA,
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

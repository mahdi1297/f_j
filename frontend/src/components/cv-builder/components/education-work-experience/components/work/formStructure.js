import {
  TEXTAREA,
  TEXT,
  WORK_EXPERIENCE_INFO_FA,
  COMPONY_NAME_FA,
  COMPONY_NAME,
  ROLE,
  ROLE_FA,
  EXPERIENCE_TIME,
  EXPERIENCE_TIME_FA,
  DESCRIPTION,
  DESCRIPTION_FA,
} from "../../../../../../constant/messages";

export const formStructure = () => {
  let form = {
    education: {
      title: WORK_EXPERIENCE_INFO_FA,
      form: [
        {
          id: 1,
          size: 6,
          type: TEXT,
          name: COMPONY_NAME,
          placeholder: COMPONY_NAME_FA,
          label: COMPONY_NAME_FA,
          labelRequired: true,
          validation: {
            required: true,
            minLength: 1,
            maxLength: 250,
          },
        },
        {
          id: 2,
          size: 6,
          type: TEXT,
          name: ROLE,
          placeholder: ROLE_FA,
          label: ROLE_FA,
          labelRequired: true,
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
          type: TEXT,
          name: EXPERIENCE_TIME,
          label: EXPERIENCE_TIME_FA,
          placeholder: EXPERIENCE_TIME_FA,
          labelRequired: true,
          validation: {
            required: true,
            minLength: 1,
            maxLength: 250,
          },
        },
        {
          id: 4,
          size: 12,
          inline: true,
          type: TEXTAREA,
          rows: 5,
          name: DESCRIPTION,
          label: DESCRIPTION_FA,
          labelRequired: true,
          validation: {
            required: true,
            minLength: 1,
            maxLength: 250,
          },
        },
      ],
    },
  };

  return form;
};

import { SKILLS_FA, SKILLS } from "./../../../../constant/messages";

export const formStructure = {
  skillsForm: {
    title: "مهارت های من",
    form: {
      id: 1,
      size: 12,
      type: "typehead",
      typeheadType: "filler",
      label: SKILLS_FA,
      labelRequired: true,
      name: SKILLS,
      validation: { required: true },
    },
  },
};

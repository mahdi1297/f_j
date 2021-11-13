import {
  COMPONY_MEMBER_USERNAME_FA,
  ABOUT_COMPONY_MEMBER_FA,
  COMPONY_MEMBER_IMAGE_FA,
  COMPONY_MEMBER_USERNAME,
  COMPONY_MEMBER_ROLE_FA,
  ABOUT_COMPONY_MEMBER,
  COMPONY_MEMBER_IMAGE,
  COMPONY_MEMBER_ROLE,
  TEXTAREA,
  SELECT,
  TEXT,
} from "../../../../../constant/messages";

export const formStrcuture = {
  addMemberForm: [
    {
      id: 1,
      size: 6,
      type: TEXT,
      plaveholder: COMPONY_MEMBER_USERNAME_FA,
      name: COMPONY_MEMBER_USERNAME,
      label: COMPONY_MEMBER_USERNAME_FA,
      labelRequired: true,
      validation: {
        required: true,
        minLength: 2,
        maxLength: 250,
      },
    },
    {
      id: 2,
      size: 6,
      type: SELECT,
      plaveholder: COMPONY_MEMBER_ROLE_FA,
      name: COMPONY_MEMBER_ROLE,
      label: COMPONY_MEMBER_ROLE_FA,
      labelRequired: true,
      data: [
        { id: 1, title: "مدیر عامل", value: "manager" },
        { id: 2, title: "مدیر بروژه", value: "projectmanager" },
        { id: 4, title: "مدیر محصول", value: "productmanager" },
      ],
      validation: {
        required: true,
      },
    },
    {
      id: 3,
      size: 12,
      type: TEXT,
      plaveholder: COMPONY_MEMBER_IMAGE_FA,
      name: COMPONY_MEMBER_IMAGE,
      label: COMPONY_MEMBER_IMAGE_FA,
      labelRequired: true,
      validation: {
        required: true,
      },
    },
    {
      id: 4,
      type: TEXTAREA,
      size: 12,
      plaveholder: ABOUT_COMPONY_MEMBER_FA,
      name: ABOUT_COMPONY_MEMBER,
      label: ABOUT_COMPONY_MEMBER_FA,
      rows: 7,
      labelRequired: true,
      validation: {
        required: true,
        minLength: 2,
        maxLength: 250,
      },
    },
  ],
};

export const componyHistoryStructure = [
  {
    id: 3,
    size: 12,
    inline: false,
    type: TEXTAREA,
    labelRequired: false,
    name: "history",
    placeholder: "لطفا متن خود را وارد کنید",
    label: "",
    rows: 5,
    validation: {
      required: true,
      minLength: 10,
      maxLength: 512,
    },
  },
];
export const componyAboutStructure = [
  {
    id: 3,
    size: 12,
    inline: false,
    type: TEXTAREA,
    labelRequired: false,
    name: "introduction",
    placeholder: "لطفا متن خود را وارد کنید",
    label: "",
    rows: 5,
    validation: {
      required: true,
      minLength: 10,
      maxLength: 512,
    },
  },
];

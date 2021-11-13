import { SELECT, TEXT } from "./../../../../constant/messages";

export const formStructure = [
  {
    id: 1,
    type: TEXT,
    size: 6,
    name: "title",
    label: "عنوان آگهی",
    labelRequired: true,
    validation: {
      required: true,
      minLength: 2,
      maxLangth: 290,
    },
  },
  {
    id: 2,
    type: TEXT,
    size: 6,
    name: "experience",
    label: "تجربه کاری ",
    labelRequired: true,
    validation: {
      required: true,
      minLength: 2,
      maxLangth: 290,
    },
  },
  {
    id: 3,
    type: SELECT,
    size: 6,
    name: "jobtype",
    label: "نوع قرارداد",
    labelRequired: true,
    data: [
      { id: 1, title: "تمام وقت" },
      { id: 2, title: "پاره وقت" },
      { id: 3, title: "دورکاری" },
    ],
    validation: {
      required: true,
    },
  },
  {
    id: 4,
    type: SELECT,
    size: 6,
    name: "level",
    label: "سطح کار",
    labelRequired: true,
    data: [
      { id: 1, title: " Senior" },
      { id: 2, title: "Junior" },
      { id: 3, title: "کارآموز" },
    ],
    validation: {
      required: true,
    },
  },
  {
    id: 5,
    type: TEXT,
    size: 6,
    name: "salary",
    label: "رقم حقوق",
    labelRequired: true,
    validation: {
      required: true,
      minLength: 2,
      maxLangth: 290,
    },
  },
  {
    id: 6,
    size: 6,
    type: "typehead",
    typeheadType: "filler",
    label: "زمینه های فعالیت",
    labelRequired: true,
    name: "fields",
    validation: { required: true },
  },
];

export const formStructure = {
  fields: [
    {
      id: 1,
      type: "text",
      size: 12,
      label: " نام کاربری",
      name: "username",
      validation: {
        required: true,
        minLength: 2,
      },
    },
    {
      id: 2,
      type: "email",
      size: 12,
      label: "ایمیل",
      name: "email",
      validation: {
        required: true,
        minLength: 2,
      },
    },
  ],
};

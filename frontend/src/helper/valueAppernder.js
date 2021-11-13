export function valueAppender(formData, values) {
  if (values) {
    values.forEach((val) => {
      formData.append(Object.keys(val)[0], Object.values(val)[0]);
    });
  }
}

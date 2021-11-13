export function valueSetter(setValue, values) {
  if (values) {
    values.forEach((val) => {
      return setValue(Object.keys(val)[0], Object.values(val)[0]);
    });
  }
}

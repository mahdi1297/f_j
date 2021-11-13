import SweetAlert from "sweetalert2";


export default function AlertMessage(
  type,
  title,
  text,
  status,
  successHandlerFunction,
  errorHandlerFun,
  showCancelButton = false,
  confirmButtonText = "Ok",
  reverseButtons = false,
) {
  switch (type) {
    case "simple":
      SweetAlert.fire({
        title: title,
        text: text,
        icon: status,
        showCancelButton: showCancelButton,
        confirmButtonText: confirmButtonText,
        reverseButtons: reverseButtons,
      });
      break;
    case "twosteps_with_confirm":
      SweetAlert.fire({
        title: title,
        text: text,
        icon: status,
        showCancelButton: true,
        confirmButtonText: confirmButtonText,
        cancelButtonText: "صرف نظر",
        reverseButtons: true,
      }).then((result) => {
        if (result.value) {
          successHandlerFunction && successHandlerFunction();
        } else {
          errorHandlerFun && errorHandlerFun();
        }
      });
      break;
    default:
      break;
  }
}

import * as Yup from "yup";

export const BatchesSchema = Yup.object().shape({
  batchName: Yup.string().required("Batch Name Required"),
  category: Yup.string().required("Category Required"),
  from: Yup.string().required("From Required"),
  to: Yup.string().required("To Required"),
  subject: Yup.string().required("Subject Required"),
  detail: Yup.string().required("Details Required"),
  sessions: Yup.number()
    .typeError("No of sessions must be numeric")
    .required("No of sessions Required"),
  image: Yup.string().required("Image Required"),
});

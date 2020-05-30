import React from "react";
import {
  TextField,
  TextArea,
  Select,
  Button,
  ImagePicker,
  DatePicker,
} from "../../index";
import { Formik, Form } from "formik";
import swal from "sweetalert";
import { BatchesSchema } from "../../../utils/validation/schema";

function Index() {
  return (
    <React.Fragment>
      <Formik
        initialValues={{
          batchName: "",
          category: "",
          from: "",
          subject: "",
          to: "",
          sessions: "",
          detail: "",
          image: "",
        }}
        validationSchema={BatchesSchema}
        onSubmit={(values, { setSubmitting }) => {
          swal({
            title: "Success",
            text: "Details Submitted Successfully",
            icon: "success",
            button: "OK",
          });
        }}
      >
        {({ values, errors, touched, setFieldValue }) => (
          <Form>
            <div className="row">
              <div className="col-xs-12 col-md-9">
                <div className="form-row">
                  <div className="col-xs-12 col-md-6 p-0 pr-md-4">
                    <TextField
                      label="BATCH NAME"
                      isRequired={true}
                      isValid={
                        errors.batchName && touched.batchName ? true : false
                      }
                      errorMessage={errors.batchName}
                      name="batchName"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 p-0 pl-md-4">
                    <Select
                      label="CATEGORY"
                      isRequired={true}
                      isValid={
                        errors.category && touched.category ? true : false
                      }
                      errorMessage={errors.category}
                      name="category"
                    >
                      <option value="">--Select Category--</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Delhi">Delhi</option>
                    </Select>
                    <div class="invalid-feedback">{errors.batchName}</div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-xs-12 col-md-6 p-0 pr-md-4">
                    <DatePicker
                      label="FROM"
                      isRequired={true}
                      isValid={errors.from && touched.from ? true : false}
                      errorMessage={errors.from}
                      name="from"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 p-0 pl-md-4">
                    <TextField
                      label="SUBJECT"
                      isRequired={true}
                      isValid={errors.subject && touched.subject ? true : false}
                      errorMessage={errors.subject}
                      name="subject"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-xs-12 col-md-6 p-0 pr-md-4">
                    <DatePicker
                      label="TO"
                      isRequired={true}
                      isValid={errors.to && touched.to ? true : false}
                      errorMessage={errors.to}
                      name="to"
                    />
                  </div>
                  <div className="col-xs-12 col-md-6 p-0 pl-md-4">
                    <TextField
                      label="NO OF LIVE SESSIONS"
                      isRequired={true}
                      isValid={
                        errors.sessions && touched.sessions ? true : false
                      }
                      errorMessage={errors.sessions}
                      name="sessions"
                    />
                  </div>
                </div>
                <div className="form-row">
                  <div className="col-12">
                    <TextArea
                      label="DETAILS"
                      isRequired={true}
                      isValid={errors.detail && touched.detail ? true : false}
                      errorMessage={errors.detail}
                      name="detail"
                    />
                  </div>
                </div>
              </div>
              <div className="col-xs-12 col-md-3 d-md-flex justify-content-center pt-4">
                <ImagePicker
                  name="image"
                  label="Upload Image"
                  isValid={errors.image && touched.image ? true : false}
                  imageURL={values.image}
                  onChange={(event) =>
                    setFieldValue(
                      "image",
                      event.target.files[0]
                        ? URL.createObjectURL(event.target.files[0])
                        : ""
                    )
                  }
                />
              </div>
            </div>
            <div className="row">
              <div className="col pt-4">
                <Button className="btn btn-warning">SAVE AND CONTINUE</Button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </React.Fragment>
  );
}

export default Index;

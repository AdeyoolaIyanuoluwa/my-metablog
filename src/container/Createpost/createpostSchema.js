/* eslint-disable no-undef */
import * as Yup from "yup";


export const createpostSchema = Yup.object({
  title: Yup.string()
    .min(2, "Title is too short")
    .max(100, "Title is too long"),
  subtitle: Yup.string()
    .min(2, "Subtitle is too short")
    .max(20, "Subtitle is too long"),

  cover: Yup.mixed().test("is-file-too-big", "File exceeds 5MB", () => {
    let valid = true;
    const files = fileRef?.current?.files;
    if (files) {
      const fileArr = Array.from(files);
      fileArr.forEach((file) => {
        const size = file.size / 1024 / 1024;
        if (size > 10) {
          valid = false;
        }
      })
    }
    return valid
  })
    .test(
      "is-file-of-correct-type",
      "File is not of supported type",
      () => {
        let valid = true;
        const files = fileRef?.current?.files;
        if (files) {
          const fileArr = Array.from(files);
          fileArr.forEach((file) => {
            const type = file.type.split("/")[1];
            const validTypes = [png, jpeg, svg];
            if (!validTypes.includes(type)) {
              valid = false;
            }
          });
        }
        return valid;
      }
    ),
});

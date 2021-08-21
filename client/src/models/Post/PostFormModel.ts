import * as Yup from 'yup';
import {validationSchemaRules} from "@helpers/FormValidationHelper";


export const PostFormValidationSchema = validationSchemaRules({
  title: Yup.string().required(),
  body: Yup.string().required()
});


export interface IPostFormModelDTO {
  userId: number;
  title: string;
  body: string;
}

export interface IPostFormModel {
  userId: number;
  title: string;
  body: string;
}

class PostFormModel {
  static serialize = (formData: IPostFormModel): IPostFormModelDTO => ({
    userId: formData.userId,
    title: formData.title,
    body: formData.body
  });
}

export default PostFormModel;

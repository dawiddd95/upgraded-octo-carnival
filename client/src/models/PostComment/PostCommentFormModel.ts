import * as Yup from 'yup';
import { validationSchemaRules } from '@helpers/FormValidationHelper';

export const PostCommentFormValidationSchema = validationSchemaRules({
  name: Yup.string().required(),
  email: Yup.string().required().email(),
  body: Yup.string().required()
});

export interface IPostCommentFormModelDTO {
  postId: number;
  name: string;
  email: string;
  body: string;
}

export interface IPostCommentFormModel {
  postId: number;
  name: string;
  email: string;
  body: string;
}

class PostCommentFormModel {
  static serialize = (formData: IPostCommentFormModel): IPostCommentFormModelDTO => ({
    postId: formData.postId,
    name: formData.name,
    email: formData.email,
    body: formData.body,
  });
}

export default PostCommentFormModel;

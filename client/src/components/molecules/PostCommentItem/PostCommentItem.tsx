import * as React from 'react';
import styled from 'styled-components';
import { IPostCommentModel } from '@models/PostComment/PostCommentModel';

const CommentContainer = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.themeColors.bgColor3};
  border-radius: 10px;
  
  &:not(:first-child) {
    margin-top: 33px;
  }
`;

const CommentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const CommentName = styled.p`
  color: ${({ theme }) => theme.themeColors.textColor3};
  font-weight: 600;
  font-size: 17px;
`;

const CommentEmail = styled.a`
  color: ${({ theme }) => theme.themeColors.textColor1};
  font-size: 17px;
`;

const CommentBody = styled.p`
  color: ${({ theme }) => theme.themeColors.textColor3};
  font-weight: 300;
  font-size: 17px;
`;

interface IProps {
  comment: IPostCommentModel;
}

const PostCommentItem = ({ comment }: IProps): React.ReactElement => (
  <CommentContainer>
    <CommentHeader>
      <CommentName>{comment.name}</CommentName>
      <CommentEmail href={`mailto:${comment.email}`}>{comment.email}</CommentEmail>
    </CommentHeader>

    <CommentBody>{comment.body}</CommentBody>
  </CommentContainer>
);

export default PostCommentItem;
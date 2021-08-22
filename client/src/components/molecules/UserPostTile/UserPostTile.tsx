import * as React from 'react';
import styled from 'styled-components';
import { IPostModel } from '@models/Post/PostModel';
import { Link } from 'react-router-dom';
import { theme } from '@theme/mainTheme';
import * as S from './StyledUserPostTile'


interface IProps {
  post: IPostModel;
  postLink: string;
  removePostAction: (postId: number) => void;
}

const UserPostTile = ({ post, postLink, removePostAction }: IProps): React.ReactElement => {
  return (
    <S.Container>
      <div>
        <S.RemoveButton onClick={() => removePostAction(post.id)}>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M13 6C13.5523 6 14 6.44772 14 7V17C14 18.6569 12.6569 20 11 20H5C3.34315 20 2 18.6569 2 17V7C2 6.44772 2.44772 6 3 6H13ZM12 8H4V17C4 17.5523 4.44772 18 5 18H11C11.5523 18 12 17.5523 12 17V8ZM5 1C5 0.447715 5.44772 0 6 0H10C10.5523 0 11 0.447715 11 1V2H15C15.5523 2 16 2.44772 16 3C16 3.55228 15.5523 4 15 4H1C0.447715 4 0 3.55228 0 3C0 2.44772 0.447715 2 1 2H5V1Z" fill="#ACACAC"/>
            </svg>
        </S.RemoveButton>
        <Link to={postLink} style={{ textDecoration: 'none', color: theme.colors.white }}>
          <S.PostTitle>{post.title}</S.PostTitle>
        </Link>
      </div>

      <Link to={postLink} style={{ textDecoration: 'none' }}>
        <S.ShowPostIcon>
            <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0.36969 1L1.32348 0L8 7L1.32348 14L0.36969 13.0141L6 7L0.36969 1Z" fill="white"/>
            </svg>
        </S.ShowPostIcon>
      </Link>
    </S.Container>
  );
};

export default UserPostTile;

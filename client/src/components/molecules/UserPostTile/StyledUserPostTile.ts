import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 3rem;
  background: #193850;
  margin-top: 3rem;
  border-radius: 0.7rem;
`;

export const RemoveButton = styled.button`
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
`;

export const PostTitle = styled.span`
  padding-left: 17px;
  font-weight: 400;
  font-size: 14px;
  position: relative;
  bottom: 4px;
`;

export const ShowPostIcon = styled.span`
  font-size: 30px;
  line-height: 0;
`;

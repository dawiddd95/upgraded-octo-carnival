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
  position: relative;
`;

export const PostTitle = styled.span`
  margin-left: 1.7rem;
  font-weight: 400;
  font-size: 1.4rem;
  position: relative;
  bottom: 0.4rem;
`;

export const ShowPostIcon = styled.span`
  font-size: 3rem;
  line-height: 0;
  position: relative;
`;

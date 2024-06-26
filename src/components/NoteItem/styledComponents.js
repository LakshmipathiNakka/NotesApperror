// Style your elements here
import styled from 'styled-components'

export const NoteItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #aab8c8;
  min-width: 28%;
  margin: 20px;
`
export const NoteItemTitle = styled.h1`
  color: #1e293b;
  font-size: 25px;
  font-weight: 500;
  font-family: 'Roboto';
`
export const NoteItemDescription = styled.p`
  color: #334155;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Roboto';
`

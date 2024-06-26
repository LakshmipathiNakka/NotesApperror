// Write your code here

import {
  NoteItemContainer,
  NoteItemDescription,
  NoteItemTitle,
} from './styledComponents'

const NoteItem = props => {
  const {NotesDetails} = props
  const {title, notes} = NotesDetails
  return (
    <NoteItemContainer>
      <NoteItemTitle>{title}</NoteItemTitle>
      <NoteItemDescription>{notes}</NoteItemDescription>
    </NoteItemContainer>
  )
}

export default NoteItem

// Write your code here

import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import NoteItem from '../NoteItem'

import {
  MainContainer,
  NotesInputContainer,
  MainHeading,
  InputField,
  AddBtn,
  NotesListContainer,
  EmptyContainer,
  NoNotesText,
  EmptyDescription,
  TextArea,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [notes, setNotes] = useState('')
  const [notesList, setNotesList] = useState([])
  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeNotes = event => setNotes(event.target.value)
  const addBtn = () => {
    if (title.trim() && notes.trim()) {
      const newNote = {
        id: uuidv4(),
        title,
        notes,
      }
      setNotesList(prev => [...prev, newNote])
      setTitle('')
      setNotes('')
    }
  }

  const renderEmpty = () => (
    <EmptyContainer>
      <img
        alt="notes empty"
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
      />
      <NoNotesText>No Notes Yet</NoNotesText>
      <EmptyDescription>Notes you add will appear here</EmptyDescription>
    </EmptyContainer>
  )

  const renderList = () => (
    <NotesListContainer>
      {notesList.map(eachNotes => (
        <NoteItem key={eachNotes.id} NotesDetails={eachNotes} />
      ))}
    </NotesListContainer>
  )

  return (
    <MainContainer>
      <MainHeading>Notes</MainHeading>
      <NotesInputContainer>
        <InputField
          onChange={onChangeTitle}
          placeholder="Title"
          type="text"
          value={title}
        />
        <TextArea
          onChange={onChangeNotes}
          placeholder="Take a Note..."
          value={notes}
        />
        <AddBtn onClick={addBtn} type="submit">
          Add
        </AddBtn>
      </NotesInputContainer>
      <div>{notesList.length === 0 ? renderEmpty() : renderList()}</div>
    </MainContainer>
  )
}

export default Notes

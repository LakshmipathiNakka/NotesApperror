// Style your elements here
import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
  background-size: cover;
`

export const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  resize: vertical;
`
export const NotesInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 1px 1px 4px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  width: 80%;
  height: 30vh;
`
export const MainHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-size: 38px;
  font-weight: 600;
`
export const InputField = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #fff;
  border-radius: 4px;
  transition: box-shadow 0.3s ease-in-out;

  &:focus {
    outline: none;
    box-shadow: 0 0 8px 4px rgba(255, 255, 255, 0.7); /* Adjust the color and blur radius as needed */
  }
`
export const AddBtn = styled.button`
  background-color: #4c63b6;
  color: #fff;
  margin-left: auto;
  padding: 8px 5px 8px 5px;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 300;
  width: 80px;
  height: 40px;
  border: 1px solid #4c63b6;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`
export const NotesListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  flex-wrap: wrap;
  display: flex;
  width: 80%;
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NoNotesText = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
`
export const EmptyDescription = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 300;
`

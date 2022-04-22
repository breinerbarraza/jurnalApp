import React from 'react'
import { NotesAppBar } from './NotesAppBar'

export const NoteScreen = () => {
  return (
    <div className='notes__main-content'>

        <NotesAppBar/>
        <div className='notes__content'>
          
          <input
              type='text'
              placeholder='Some awesome title'
              className='notes__title-input'
              autoComplete='off'
          />
          
          <textarea
              placeholder='what happend today'
              className='notes__textarea'
          >

          </textarea>

          <div className='notes__image'>

            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfQH-MTpqVrGWIG6w3tzHoaX4uAy3SQVoXog&usqp=CAU'
                alt='image'
            />

          </div>

        </div>
    </div>
  )
}

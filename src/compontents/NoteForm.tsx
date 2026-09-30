/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react"
type Note = {
  title: string
  priority: string
  category: string
  description: string
}

type NoteFormProps = {
  notes: Note[]
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>
}

type FormElement = HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement

const NoteForm = ({ notes, setNotes }: NoteFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "work",
    description: "",
  })

  const handleChange = (e: React.ChangeEvent<FormElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    //validation
    if (!formData.title || !formData.description) return

    // create new note
    const newNote = { id: Date.now(), ...formData }

    //add notes to state
    setNotes([newNote, ...notes])

    // console.log("form submitted", formData)
  }
  return (
    <form onSubmit={handleSubmit} className='mb-6'>
      <div className='mb-4'>
        <label htmlFor='title' className='font-semibold block'>
          Title
        </label>
        <input
          name={"title"}
          type='text'
          className='w-full border rounded-lg p-2'
          value={formData.title}
          onChange={handleChange}
        />
      </div>
      <div className='mb-4'>
        <label htmlFor='priority' className='font-semibold block'>
          Priority
        </label>
        <select
          name={"priority"}
          className='w-full border rounded-lg p-2'
          value={formData.priority}
          onChange={handleChange}>
          <option value={"high"}>🔴 High</option>
          <option value={"medium"}>🟡 Medium</option>
          <option value={"low"}>🟢 Low</option>
        </select>
      </div>
      <div className='mb-4'>
        <label htmlFor='category' className='font-semibold block'>
          Category
        </label>
        <select
          name={"category"}
          className='w-full border rounded-lg p-2'
          value={formData.category}
          onChange={handleChange}>
          <option value={"work"}>💻 Work</option>
          <option value={"house"}>🏠 House</option>
          <option value={"health"}>👩‍⚕️ Health</option>
          <option value={"hobby"}>💡 Hobby</option>
        </select>
      </div>
      <div className='mb-4'>
        <label htmlFor='description' className='font-semibold block'>
          Description
        </label>
        <textarea
          name={"description"}
          className='w-full border rounded-lg p-2'
          value={formData.description}
          onChange={handleChange}></textarea>
      </div>
      <button className='bg-purple-500 tet-white w-full rounded-lg py-2 hover:bg-purple-600'>
        Submit
      </button>
    </form>
  )
}

export default NoteForm

import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../styles/Home.css'

const UndoRedo = () => {
  const canUndo = useSelector((state) => state.main.past.length)
  const canRedo = useSelector((state) => state.main.future.length)

  const dispatch = useDispatch()

  const handleUndo = () => {
    dispatch({
      type: 'UNDO',
      payload: null
    })
  }

  const handleRedo = () => {
    dispatch({
      type: 'REDO',
      payload: null
    })
  }

  return (
    <div style={{ marginBottom: 5 }}>
      <button className="btn" onClick={() => handleUndo()} disabled={!canUndo}>
        Undo
      </button>
      <button className="btn" onClick={() => handleRedo()} disabled={!canRedo}>
        Redo
      </button>
    </div>
  )
}

export default UndoRedo

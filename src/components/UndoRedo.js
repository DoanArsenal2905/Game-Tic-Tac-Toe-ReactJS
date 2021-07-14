import React from 'react'
import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { useDispatch, useSelector } from 'react-redux'

const UndoRedo = () => {
  const canUndo = useSelector((state) => state.main.past.length > 0)
  const canRedo = useSelector((state) => state.main.future.length > 0)

  const dispatch = useDispatch()

  return (
    <p>
      <button
        onClick={() => dispatch(UndoActionCreators.jump(-2))}
        disabled={!canUndo}
      >
        Undo
      </button>
      <button
        onClick={() => dispatch(UndoActionCreators.jump(2))}
        disabled={!canRedo}
      >
        Redo
      </button>
    </p>
  )
}

export default UndoRedo

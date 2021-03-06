const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
  return (
    <div className={`list-item ${state}`}>
      <label classname="checkbox">
        <input type="checkbox" defaultChecked={state === 'TASK_ARCHIVED'} disabled name="checked" />
        <span className="checkbox-custom" onClick={() => onArchiveTask(id)}></span>
      </label>
      <div className="title">
        <input type="text" value={title} readOnly placeholder="Input title" />
      </div>
      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== 'TASK_ARCHIVED' && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => onPinTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  )
}

export default Task

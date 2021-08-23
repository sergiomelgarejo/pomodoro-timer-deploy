export function Button({title, activeClass, _callback}) {
  return (
    <button title={title} className={activeClass} onClick={_callback}>
      {title}
    </button>
  )
}
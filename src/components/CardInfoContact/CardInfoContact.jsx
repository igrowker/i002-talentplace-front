import './CardInfoContact.css'

export const CardInfoContact = ({className, text, num}) => {
  return (
    <div className={className}>
        <span className='badge-card'>{num}</span>
        <p className='text-info-card'>{text}</p>
    </div>
  )
}

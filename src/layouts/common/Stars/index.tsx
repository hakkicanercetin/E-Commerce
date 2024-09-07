import star from "../../../assets/star.png"
const Stars = ({count}:{count:number}) => {
  return (
    <div className="flex justify-center">
      {
        Array.from({length:count},(_,index)=>(
        <img key={index} src={star} alt="star" />
        ))
      }
    </div>
  )
}

export default Stars
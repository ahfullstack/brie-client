import SingleStatus from "./SingleStatus"
export const AllStatus = (props) => {
  return (
    <div>
        {props.status.map((stat)=>{
            return <SingleStatus key={stat._id} stat={stat} deleteStatus={props.deleteStatus} editStat={props.editStat}/>
        })}
    </div>
  )
}

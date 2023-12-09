import React from "react"
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

const PetIndex = ({ pets }) => {
  return (
    <>
      <div>Pet Index</div>
      {pets.map((pets, index) => (
        <div className="card-container" key={index}>
          <div className="picture"></div>
        </div>
      ))}
    </>
  )
}

export default PetIndex

// import React from "react"
// import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap"

// const PetIndex = ({ pets }) => {
//   // console.log(pets)
//   return (
//     <main>
//       <div>Pet Index</div>
//       {pets.map((pet, index) => {
//         return (
//           <Card
//             style={{
//               width: "14rem",
//             }}
//             key={index}
//           >
//             <img alt={`profile of a pet named ${pet.name}`} src={pet.image} />
//             <CardBody>
//               <CardTitle tag="h5">{pet.name}</CardTitle>
//               <CardSubtitle className="mb-2 text-muted" tag="h6">
//                 Age: {pet.age}
//               </CardSubtitle>
//               <Button>See More Details</Button>
//             </CardBody>
//           </Card>
//         )
//       })}
//     </main>
//   )
// }
// export default PetIndex

/* <main>
{pets.map((pet, index) => {
  return (
    <>
      <p>{pet.name}</p>
      <p>{pet.age}</p>
    </>
  )
})}
</main> */

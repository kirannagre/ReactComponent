// import React from 'react'

// const DisplayData = () => {
//   const data={
//     "name":"Kiran",
//     "age":21,
//     "College":"SRPCE",
//     "Percentage":99.9,
//     url:"https://images.pexels.com/photos/1714208/pexels-photo-1714208.jpeg"
//   }  
//   return (
//     <div>
//       <h1>{data.name}</h1>
//       <li>{data.age}</li>
//       <li>{data.Percentage}</li>
//       <li>{data.College}</li>
//       <img src={data.url} alt="" width="80px"  />

//       <p  className='para'  style={{width:"45%", color:'white',textAlign:'justify'}}>
//         Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quod suscipit nemo quaerat. Aspernatur facilis autem, ea sunt velit labore. Vero quaerat facilis iste facere voluptas tempora adipisci at sequi!
//       </p>
//     </div>
//   )
// }

// export default DisplayData

import React from 'react'

const DisplayData = () => {
  const detail={
     "Name":"Adinath",
     "Age":"22",
     "College":"xyz",
     "Address":"MOHJABANDI",
     "MobileNO":"8888957909",
     "Eductioon":"Btech engg",

  }

  return (
    <div>
      <h1>{detail.Name}</h1>
      <li>{detail.Age}</li>
      <li>{detail.College}</li>
      <li>{detail.Addres}s</li>
      <li>{detail.Eductioon}</li>
      <li>{detail.MobileNO}</li>
      
    </div>
  )
}

export default DisplayData


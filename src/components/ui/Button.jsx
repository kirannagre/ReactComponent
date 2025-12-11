import React from 'react'

// const Button = () => {
//   return (
//     <div>
//       <button>Next</button>
//     </div>
//   )
// }

// export default Button
const Button = ({ text, className, onClick }) => {
  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;

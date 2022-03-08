import React from 'react';
import './Main.css';

import background from '../../background.png';
import { animals } from '../../data';
import Animal from '../Animal/Animal';

// export default function Main() {
//   return (
//     <div className="Main" style={{ backgroundImage: `url(${background})` }}>
//       <main />
//       {animals.map((item) => (<Animal key={item.name} {...item} />))}
//     </div>

//   );
// }

export default function Main() {
  return (
    <main style={{ backgroundImage: `url(${background})` }}>
      {animals.map((item) => (
        <Animal 
          key={item.name} {...item}
          // type={item.type}
          // name={item.name}
          // says={item.says}
          // top={item.top}
          // left={item.left}
        />
      ))}
    </main>

  );
}
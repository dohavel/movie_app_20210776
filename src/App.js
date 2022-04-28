import React from "react";
function Sports({name,picture}) {
  return (
  <div>
    <h2>introduce {name}</h2>;
    <img src={picture} />
    </div>
  );
}
const SportsILike =[
  {
    name:'Son',
    image:'http://res.heraldm.com/content/image/2019/06/14/20190614000621_0.jpg',
  },
  {
    name:'Salah',
    image:'https://cdnweb01.wikitree.co.kr/webdata/editor/201803/26/img_20180326120937_432b3a9a.jpg',
  },
  {
    name:'Harry Kane',
    image:'https://ext.fmkorea.com/files/attach/new/20150714/1121272/69391174/192404380/34cd7e57be394b4d7f26d0cc13e30dc1.jpg',
  },
];
function App() {
  return (
    <div>
      {SportsILike.map(dish =>(<Sports name={dish.name} picture={dish.image}
      />))}
    </div>
  );
}
export default App;

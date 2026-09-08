// const container=document.getElementById('container');
// console.log(container);

// const root=ReactDOM.createRoot(container);
// const h2=React.createElement('h2',{style:{color:'red',backgroundColor:'cyan'}},'Welcome to React App Development');
// const h1=React.createElement('h1',{style:{color:'brown'}},'ABES Engineering College');

// const img=React.createElement('img',{src:'https://w.wallhaven.cc/full/yq/wallhaven-yqg6r7.jpg',style:{height:'200px',width:'370px'}});

// const div=React.createElement('div',{style:{border:'2px solid red'}},img,h1,h2);

// const h21 = <h2>Hello World</h2>; //JSX
const h21 = <h2>Hello World</h2>;
const h22 = <h2>Abes Engineering College</h2>;
const div =<div>{h21},{h22}</div>;

const wrapper = <div style={{border:'2px solid red'}}>
    {div}
    <h2>Hey using JSX</h2>
</div>

root.render(wrapper);
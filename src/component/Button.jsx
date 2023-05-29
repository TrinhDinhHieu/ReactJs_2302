export default function Button({ handerCick, children, prop }) {
  return (
    <button style={{ margin: '0 10px', padding: '10px 30px'}}
        // type={prop.type}
        // name={prop.name}
        onClick={(e)=>handerCick(e)} // ()=>handerCick() khai báo ntn thì onClick sẽ dk gọi ra chi có clink button
      >
      {children}
    </button>
  );
}

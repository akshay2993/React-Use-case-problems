const Suggestions = ({ list, onClick }) => {
  return (
    <>
    {list && list.length ?
    <ul>
       {list.map((item, index) => <li key={index} onClick={onClick}>{item}</li>)}
    </ul>
    : <p>No items match your Search</p>
    }
    </>
  );
};

export default Suggestions;

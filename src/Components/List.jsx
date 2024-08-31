import Card from "./Card";

/*eslint-disable react/prop-types */
function List({ data }) {
  return (
    <div className="list flex flex-col gap-12">
      {data.length === 0 ? (
        <div className="w-full text-center">No Posts yet 😢 </div>
      ) : (
        data?.map((item) => <Card key={item.id} item={item} />)
      )}
    </div>
  );
}

export default List;

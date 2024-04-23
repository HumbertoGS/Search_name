import Card from "./component/Card";
import Items from "./component/Item";

const AllDataName = ({ getFetchAllData }) => {
  return (
    <div className="w-3/6">
      <Card Title="Nombres Ingresados" className="border-r-2 pt-4 pb-10">
        <Items
          className="pb-5 underline"
          label="Code"
          value="Registered name"
        />
        {getFetchAllData?.response.map((item) => {
          return (
            <Items key={item.id} label={`- [${item.id}]`} value={item.name} />
          );
        })}
      </Card>
    </div>
  );
};

export default AllDataName;

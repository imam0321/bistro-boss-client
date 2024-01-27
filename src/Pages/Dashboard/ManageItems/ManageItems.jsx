import { FaPenToSquare, FaTrashCan } from "react-icons/fa6";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import useMenu from "../../../Hooks/useMenu";


const ManageItems = () => {
  const [menu] = useMenu();

  const handleUpdate = (item) => {
    // TODO: Update Items 
  }
  const handleDelete = (item) => {
    // TODO: delete Items 
  }
  return (
    <div>
      <SectionTitle heading='Manage All Items' subHeading='Hurry up'></SectionTitle>
      <div className="uppercase flex justify-between items-center mb-5">
        <h1 className="text-2xl">Total item: {menu.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead className="bg-[#D1A054] text-white">
            <tr>
              <th></th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {menu.map((item, index) => (
              <tr key={item._id}>
                <td className="font-semibold">{index + 1}</td>
                <td>
                  <div className="avatar">
                    <div className="mask w-12 h-12">
                      <img src={item.image} alt="Food" />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td className="text-end">${item.price}</td>
                <td>
                  <button
                    onClick={() => handleUpdate(item)}
                    className="btn bg-[#D1A054] text-white hover:bg-[#D1A054]"
                  >
                    <FaPenToSquare />
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(item)}
                    className="btn bg-red-600 text-white hover:bg-red-600"
                  >
                    <FaTrashCan />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageItems;
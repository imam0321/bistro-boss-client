import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const [axiosSecure] = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();

  const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.image[0]);

    fetch(img_hosting_url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgResponse) => {
        if (imgResponse.success) {
          const imgURL = imgResponse.data.display_url;
          const { name, price, category, recipe } = data;
          const newItem = {
            name,
            recipe,
            image: imgURL,
            category,
            price: parseFloat(price),
          };
          console.log(newItem);
          axiosSecure.post("/menu", newItem).then((data) => {
            if (data.data.insertedId) {
              reset();
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Item added successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
        }
      });
  };

  return (
    <div>
      <SectionTitle
        subHeading="What's new?"
        heading="ADD AN ITEM"
      ></SectionTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Recipe name*</span>
          </div>
          <input
            type="text"
            {...register("name", { required: true, maxLength: 30 })}
            placeholder="Recipe name"
            className="input input-bordered w-full"
          />
        </label>
        <div className="flex gap-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Category*</span>
            </div>
            <select
              defaultValue="pic one"
              {...register("category", { required: true })}
              className="select select-bordered"
            >
              <option>Pick one</option>
              <option>salad</option>
              <option>pizza</option>
              <option>drink</option>
              <option>desert</option>
              <option>soup</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
            <input
              type="number"
              {...register("price", { required: true })}
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </label>
        </div>
        <label className="form-control w-full">
          <div className="label">
            <span className="label-text font-semibold">Recipe Image*</span>
          </div>
          <input
            type="file"
            {...register("image", { required: true })}
            className="file-input file-input-bordered w-full"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            {...register("recipe", { required: true })}
            placeholder="Recipe Details"
          ></textarea>
        </label>
        <input
          type="submit"
          className="btn bg-[#D1A054] text-white rounded-none mt-4"
          value="Add Item"
        />
      </form>
    </div>
  );
};
//
export default AddItem;

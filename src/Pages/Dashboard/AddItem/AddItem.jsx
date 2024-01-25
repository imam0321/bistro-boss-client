import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form"

const img_hosting_token = import.meta.env.VITE_IMAGE_UPLOAD_TOKEN;

const AddItem = () => {
  const { register, handleSubmit, formState: { errors }, } = useForm();
  
  const img_hosting_url = `https://api.imgbb.com/1/upload?expiration=600&key=${img_hosting_token}`;

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append('image', data.image[0])

    fetch(img_hosting_url, {
      method: 'POST',
      body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {
      console.log(imgResponse);
    })

  }

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
            {...register("name", {required: true, maxLength: 30})}
            placeholder="Recipe name"
            className="input input-bordered w-full"
          />
        </label>
        <div className="flex gap-3">
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Category*</span>
            </div>
            <select defaultValue='pic one' {...register("category", {required: true})} className="select select-bordered">
              <option>
                Pick one
              </option>
              <option>Salad</option>
              <option>Pizza</option>
              <option>Drink</option>
              <option>Desert</option>
              <option>Soup</option>
            </select>
          </label>
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text font-semibold">Price*</span>
            </div>
            <input
              type="number"
              {...register("price", {required: true})}
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
            {...register("image", {required: true})}
            className="file-input file-input-bordered w-full"
          />
        </label>
        <label className="form-control">
          <div className="label">
            <span className="label-text font-semibold">Recipe Details*</span>
          </div>
          <textarea
            className="textarea textarea-bordered h-24"
            {...register("recipe", {required: true})}
            placeholder="Recipe Details"
          ></textarea>
        </label>
        <input type="submit" className="btn bg-[#D1A054] text-white rounded-none mt-4" value='Add Item' />
      </form>
    </div>
  );
};
// 
export default AddItem;

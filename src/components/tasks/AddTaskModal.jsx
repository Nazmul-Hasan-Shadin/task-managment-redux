import React from "react";
import Modal from "../ui/Model";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/feature/task/taskSlice";

const AddTaskModal = ({ isOpen, setIsOpen }) => {
  const { register, handleSubmit, reset } = useForm();

  const dispatch = useDispatch();
  const onCancel = () => {
    reset();
    setIsOpen(false);
  };

  const onSubmit = (data) => {
    console.log(data);
    dispatch(addTask(data));
  };
  return (
    <div>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title={"programming hero"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Title</label>
            <input
              className="w-full rounded-md"
              type="text"
              id="title"
              {...register("title")}
            />
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="description" className="mb-2">
              Description
            </label>
            <textarea
              className="w-full rounded-r-md"
              id="description"
              {...register("description")}
            ></textarea>
          </div>

          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Deadline</label>
            <input
              className="w-full rounded-md"
              type="date"
              id="date"
              {...register("date")}
            />
          </div>

          <div className="flex flex-col gap-3 ">
            <label htmlFor="title">Assign to</label>
            <select
              className="w-full rounded-md "
              id="assignTo"
              {...register("assignTo")}
            >
              <option value="Nazmul Hasan Shadin">Nazmul Hasan</option>
              <option value="Abdullah Al Rifat">Abdullah Al Rifata</option>
              <option value="Alex Nizom">Alex Nizom</option>
            </select>
          </div>

          <div className="flex flex-col mb-5">
            <label htmlFor="title">Priority</label>
            <select className="w-full rounded-md" {...register("priority")}>
              <option value="High">High</option>
              <option value="Normal">Normal</option>
            </select>
          </div>

          <div className="flex gap-3 justify-end">
            <button
              type="button"
              onClick={() => onCancel()}
              className="btn btn-danger"
            >
              Canclel
            </button>
            <button className="btn btn-primary">submit</button>
          </div>

          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default AddTaskModal;

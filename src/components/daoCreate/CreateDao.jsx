import React, { useContext } from "react";
import { DaoContext } from "../../context/DaoContext";

const CreateDao = () => {
  const { createDaoForm, setCreateDaoForm } = useContext(DaoContext);
  return (
    <div className="mt-4">
      <div>
        <label className="text-lg text-white">
          Enter DAO Name :
          <input
            type="text"
            value={createDaoForm.DaoName}
            onChange={(myEvent) =>
              setCreateDaoForm({
                ...createDaoForm,
                DaoName: myEvent.target.value,
              })
            }
            className="flex mt-2 w-full text-black rounded-md"
          />
        </label>
      </div>
      <div className="mt-4">
        <label className="text-lg text-white">
          Enter DAO Description :
          <input
            type="text"
            value={createDaoForm.DaoDesc}
            onChange={(myEvent) =>
              setCreateDaoForm({
                ...createDaoForm,
                DaoDesc: myEvent.target.value,
              })
            }
            className="flex mt-2 w-full text-black rounded-md"
            style={{
              marginRight: "5px",
            }}
          />
        </label>
      </div>
    </div>
  );
};

export default CreateDao;

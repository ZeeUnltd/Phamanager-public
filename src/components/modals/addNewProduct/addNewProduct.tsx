import "./index.css";

// interface formProps {
//   ref: React.LegacyRef<HTMLFormElement> | undefined
//   onSubmit: React.FormEventHandler<HTMLFormElement>
// }

const AddNewProduct = ({ ref, onSubmit, onChange }) => {
  return (
    <form className="new-form" ref={ref} onSubmit={onSubmit}>
      <div></div>
      <div className="all-inputs-wrap">
        <div className="input-wrap">
          <div>
            <label className="label1">Item name</label>
            <input
              placeholder="Item name"
              type="text"
              name="item"
              id="item"
              onChange={onChange}
            />
          </div>
          <div>
            <label>Category</label>
            <input
              placeholder="Category"
              type="text"
              name="category"
              id="category"
              onChange={onChange}
            />
          </div>
          <div>
            <label>Brand</label>
            <input
              placeholder="Brand"
              type="text"
              name="brand"
              id="brand"
              onChange={onChange}
            />
          </div>
          <div>
            <label>Dosage strength</label>
            <input
              placeholder="Input number"
              type="number"
              name="dosage_strength"
              id="dosage_strength"
              onChange={onChange}
            />
          </div>
          <div>
            <label>Price</label>
            <input
              placeholder="Price"
              type="number"
              name="price"
              id="price"
              onChange={onChange}
            />
          </div>
          <div>
            <label>Inventory ID</label>
            <input
              placeholder="Inventory ID"
              type="text"
              name="id"
              id="id"
              onChange={onChange}
            />
          </div>
        </div>

        <div className="unit">
          <label></label>
          <input
            placeholder="Unit"
            type="number"
            name="unit"
            id="unit"
            onChange={onChange}
          />
        </div>
      </div>

      <button className="button">Add to counter</button>
    </form>
  );
};

export default AddNewProduct;

//text Field component (based of your code)
export const TextField = ({ label, value, setValue }) => <>
    <div className="form-group mb-3 ">
        <label htmlFor="value">{ label }</label>
        <input type="text"
               name="value"
               id="value"
               className="form-control mt-2"
               value={value}
               onChange={event => setValue(event.target.value)} />
    </div>
</>;
//textArea component -- depicts text area with label

export const TextArea = ({ label, value, setValue }) => <>
    <div className="form-group mb-3">
        <label htmlFor="value">{ label }</label>
        <textarea   name="value"
                    id="value"
                    className="form-control mt-2 pb-5"
                    value={value}
                    onChange={event => setValue(event.target.value)} />
    </div>
</>;
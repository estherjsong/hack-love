import { Label } from "reactstrap";

const CustomInput = ({ label, value, onChange }) => {
    return (
        <div>
            <Label for="location">
                {label}
            </Label>
            <input
                type="text"
                style={{
                    border: 'none',
                    borderBottom: '1px solid #ced4da',
                    padding: '5px 10px',
                    outline: 'none',
                }}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default CustomInput;
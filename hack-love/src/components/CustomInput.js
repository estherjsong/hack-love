import { Label, Row, Col } from "reactstrap";

const CustomInput = ({ label, value, onChange }) => {
    return (
        <div>
            <Row className="align-items-center">
                <Col sm="6" md="4" lg="4" xl="3">
                    <Label for="location"
                        tag="h4">
                        {label}
                    </Label>
                </Col>
                <Col sm="6" md="8" lg="8" xl="9">
                    <input
                        type="text"
                        style={{
                            border: 'none',
                            borderBottom: '1px solid #ced4da',
                            width: '300px',
                            padding: '5px 10px',
                            outline: 'none',
                            backgroundColor: 'transparent', // 투명한 배경 설정
                            fontweight: '700',
                            fontsize: '2.6rem',
                            color: 'rgba(13, 13, 13, 0.75)',
                        }}
                        value={value}
                        onChange={onChange}
                    />
                </Col>
            </Row>
        </div>
    );
};

export default CustomInput;
import styled from "styled-components";

function Item({ children, onChange }) {
  return <ItemWrapper>
    <label>
      <input type="checkbox" name="" id="" onChange={onChange}/> 
      <span/>
      <div>
        {children}
      </div>
    </label>
  </ItemWrapper>
}

function SelectInput({ answer=[], setAnswer, options }) {
  const handleChange = (e, index) => {
    const { checked } = e.target;
    if (checked) {
      setAnswer([...answer, index]);
    } else {
      setAnswer(answer.filter((item) => item !== index));
    }
  }
  return <SelectWrapper>
    {options.items.map((item, index) => (
      <Item key={index} onChange={(e) => handleChange(e, index)}>{item}</Item>
    ))}
  </SelectWrapper>
}

const SelectWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const ItemWrapper = styled.div`
  input[type="checkbox"] {
    display: none;
  }
  input[type="checkbox"] ~ span {
    width: 24px;
    height: 24px;
    border: 3px solid #e2dfdf;
    box-sizing: border-box;
    display: inline-block;
    vertical-align: middle;
    border-radius: 100%;
    margin-right: 10px;
  }
  input[type="checkbox"]:checked ~ span {
    border: 8px solid #6542f1;
  }
  input[type="checkbox"] ~ div {
    font-size: 14px;
    line-height: 18px;
    display: inline-block;
    vertical-align: middle;
  }
  input[type="checkbox"]:checked ~ div {
    font-weight: bold;
  }
`;


export default SelectInput;
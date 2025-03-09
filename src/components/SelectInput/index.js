import styled from "styled-components";

function Item({ children, checked, onChange }) {
  return <ItemWrapper>
    <label>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span />
      <div>
        {children}
      </div>
    </label>
  </ItemWrapper>
}

function SelectInput({ answer = [], setAnswer, options }) {
  const handleChange = (e, index) => {
    const { checked } = e.target;
    if (checked) {
      const { max = 1 } = options;
      if (answer.length >= max) {
        alert(`최대 ${max}개만 선택할 수 있습니다.`);
        return;
      }
      setAnswer([...answer, index]);
    } else {
      setAnswer(answer.filter((item) => item !== index));
    }
  }
  return <SelectWrapper>
    {options.items.map((item, index) => (
      <Item key={index} checked={answer.includes(index)} onChange={(e) => handleChange(e, index)}>{item}</Item>
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